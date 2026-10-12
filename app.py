from datetime import datetime, timezone

from flask import Flask, render_template, request, jsonify

from database import get_connection, initialize_database

app = Flask(__name__)

initialize_database()


@app.route("/")
@app.route("/index.html")
def home():
    return render_template(
        "index.html",
        active_page="home"
    )


@app.route("/roadmap.html")
def roadmap():
    return render_template(
        "roadmap.html",
        active_page="roadmap"
    )


@app.route("/health")
def health():
    return {"status": "ok", "app": "Mini Memory"}



@app.route("/api/progress/<lesson_id>", methods=["GET"])
def get_lesson_progress(lesson_id):

    with get_connection() as connection:
        lesson = connection.execute("""
            SELECT lesson_id
            FROM lessons
            WHERE lesson_id = ?
        """, (lesson_id,)).fetchone()

        if lesson is None:
            return jsonify({"error": "Lesson not found"}), 404

        progress = connection.execute("""
            SELECT completed, completed_at
            FROM lesson_progress
            WHERE lesson_id = ?
        """, (lesson_id,)).fetchone()

    if progress is None:
        return jsonify({
            "lesson_id": lesson_id,
            "completed": False,
            "completed_at": None
        })

    return jsonify({
        "lesson_id": lesson_id,
        "completed": bool(progress["completed"]),
        "completed_at": progress["completed_at"]
    })



@app.route("/api/progress/<lesson_id>", methods=["PUT"])
def update_lesson_progress(lesson_id):

    data = request.get_json(silent=True)

    # Validate the incoming JSON.
    if not isinstance(data, dict):
        return jsonify({"error": "JSON object required"}), 400

    completed = data.get("completed")

    if not isinstance(completed, bool):
        return jsonify({
            "error": "completed must be true or false"
        }), 400

    completed_at = (
        datetime.now(timezone.utc).isoformat()
        if completed else None
    )

    with get_connection() as connection:

        lesson = connection.execute("""
            SELECT lesson_id
            FROM lessons
            WHERE lesson_id = ?
        """, (lesson_id,)).fetchone()

        if lesson is None:
            return jsonify({"error": "Lesson not found"}), 404

        connection.execute("""
            INSERT INTO lesson_progress
                (lesson_id, completed, completed_at)
            VALUES (?, ?, ?)
            ON CONFLICT(lesson_id) DO UPDATE SET
                completed = excluded.completed,
                completed_at = excluded.completed_at
        """, (
            lesson_id,
            int(completed),
            completed_at
        ))

    return jsonify({
        "lesson_id": lesson_id,
        "completed": completed,
        "completed_at": completed_at
    })



if __name__ == "__main__":
    app.run(debug=True)
