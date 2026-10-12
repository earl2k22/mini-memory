
from flask import Flask, render_template

app = Flask(__name__)


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


if __name__ == "__main__":
    app.run(debug=True)
