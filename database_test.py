
"""
Mini Memory - Database Testing

Practice inserting and retrieving lesson records.
"""

from database import get_connection, initialize_database


def test_database():
    initialize_database()

    with get_connection() as connection:

        # Insert a lesson if it does not already exist.
        connection.execute("""
            INSERT OR IGNORE INTO lessons
                (lesson_id, title, lesson_type)
            VALUES (?, ?, ?)
        """, (
            "p1-m1-l1",
            "What is a Large Language Model?",
            "lesson"
        ))

        # Retrieve saved lessons.
        lessons = connection.execute("""
            SELECT lesson_id, title, lesson_type
            FROM lessons
        """).fetchall()

    print("\nSaved Lessons:")

    for lesson in lessons:
        print(f"ID: {lesson['lesson_id']}")
        print(f"Title: {lesson['title']}")
        print(f"Type: {lesson['lesson_type']}")
        print("---")


if __name__ == "__main__":
    test_database()
