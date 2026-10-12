
"""
Mini Memory - Database Fundamentals

Creates and initializes a local SQLite database.
"""

import sqlite3
from pathlib import Path


# Project directories
BASE_DIR = Path(__file__).resolve().parent
INSTANCE_DIR = BASE_DIR / "instance"
DATABASE_PATH = INSTANCE_DIR / "mini_memory.db"


def get_connection():
    """Open a connection to the SQLite database."""

    INSTANCE_DIR.mkdir(exist_ok=True)

    connection = sqlite3.connect(DATABASE_PATH)

    # Allow rows to be accessed by column name.
    connection.row_factory = sqlite3.Row

    # Enable foreign-key enforcement.
    connection.execute("PRAGMA foreign_keys = ON")

    return connection


def initialize_database():
    """Create the initial database tables."""

    with get_connection() as connection:

        connection.execute("""
            CREATE TABLE IF NOT EXISTS lessons (
                lesson_id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                lesson_type TEXT NOT NULL
            )
        """)

        connection.execute("""
            CREATE TABLE IF NOT EXISTS lesson_progress (
                lesson_id TEXT PRIMARY KEY,
                completed INTEGER NOT NULL DEFAULT 0
                    CHECK (completed IN (0, 1)),
                completed_at TEXT,

                FOREIGN KEY (lesson_id)
                    REFERENCES lessons(lesson_id)
            )
        """)

    print(f"Database initialized: {DATABASE_PATH}")


if __name__ == "__main__":
    initialize_database()
