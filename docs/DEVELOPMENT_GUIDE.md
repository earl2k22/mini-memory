
# Mini Memory — Development Guide

## Environment Setup, Coding Workflow, Testing, and Troubleshooting

This document contains practical instructions for
developing, running, testing, debugging, and maintaining
Mini Memory.

**Project:** Mini Memory  
**Repository:** https://github.com/earl2k22/mini-memory  
**Primary Environment:** Windows and Visual Studio Code  
**Backend:** Python and Flask  
**Database:** SQLite  
**Current Stage:** Stage 3 — Python Backend  
**Current Checkpoint:** Lesson 3.4 — API testing pending verification  

---

# 1. Purpose

Mini Memory is a personal learning project.

Its primary objective is to learn software engineering
and AI development by building a locally hosted AI that
can polish and refine webnovel chapters.

This development guide provides repeatable procedures
for working on the project safely and consistently.

The developer should understand the tools and commands
rather than simply execute them without explanation.

---

# 2. Development Environment

## 2.1 Operating System

Primary development environment:

Windows

## 2.2 Code Editor

Visual Studio Code

## 2.3 Project Location

Original home PC directory:

    E:\Code Projects\mini-memory

The location may differ if the repository is cloned
onto another computer.

## 2.4 Development Tools

Required or currently used:

- Python
- pip
- Flask
- Git
- GitHub
- Visual Studio Code
- Windows PowerShell
- Web browser

Planned:

- Ollama or another local AI runtime
- Suitable local language model

---

# 3. Opening the Project

## 3.1 Using VS Code

Open Visual Studio Code.

Select:

    File > Open Folder

Choose:

    E:\Code Projects\mini-memory

## 3.2 Using PowerShell

Open a terminal and run:

    cd "E:\Code Projects\mini-memory"

Check the current directory:

    Get-Location

List the files:

    Get-ChildItem

The folder should contain app.py, database.py,
README.md, templates/, and static/.

---

# 4. Python Setup

## 4.1 Check Python

    python --version

Check pip:

    python -m pip --version

If the python command is unavailable, verify that
Python is installed and accessible from the terminal.

## 4.2 Create a Virtual Environment

From the project root:

    python -m venv .venv

A virtual environment provides an isolated Python
package environment for Mini Memory.

It should not be committed to GitHub.

## 4.3 Activate the Environment

PowerShell:

    .\.venv\Scripts\Activate.ps1

The terminal should display a virtual-environment
prefix similar to:

    (.venv) PS E:\Code Projects\mini-memory>

If activation is restricted, the environment's
Python executable can be used directly:

    .\.venv\Scripts\python.exe --version

Do not change system-wide execution policies
without understanding the security implications.

## 4.4 Deactivate the Environment

    deactivate

## 4.5 Select the Python Interpreter in VS Code

Open the Command Palette:

    Ctrl + Shift + P

Search for:

    Python: Select Interpreter

Select the Python interpreter inside the project's
.venv directory.

---

# 5. Installing Dependencies

## 5.1 Using requirements.txt

If the dependency file exists:

    python -m pip install -r requirements.txt

## 5.2 Installing Flask

If the dependency file is unavailable:

    python -m pip install Flask

## 5.3 Inspect Installed Packages

    python -m pip list

## 5.4 Generate requirements.txt

With the correct project virtual environment active:

    python -m pip freeze > requirements.txt

Review the generated file before committing it.

This file should contain dependencies from the
Mini Memory environment, not unrelated projects.

## 5.5 Important Reminder

At the last repository inspection,
requirements.txt was not visible on GitHub.

Verify the local file and repository status
before assuming it has been committed.

---

# 6. Running the Flask Application

## 6.1 Start Flask

From the project root:

    python app.py

The development server typically runs at:

    http://127.0.0.1:5000

## 6.2 Open the Dashboard

    http://127.0.0.1:5000/

## 6.3 Open the Learning Roadmap

    http://127.0.0.1:5000/roadmap.html

## 6.4 Health Check

    http://127.0.0.1:5000/health

Expected JSON structure:

    {
        "app": "Mini Memory",
        "status": "ok"
    }

## 6.5 Stop Flask

Return to the terminal running the server.

Press:

    Ctrl + C

## 6.6 Development Server Warning

The current Flask application uses debug mode
for local development.

Do not expose the Flask debug server directly
to the public internet.

Before enabling access from other devices,
review authentication, server configuration,
network restrictions, and application security.

---

# 7. Database Setup

## 7.1 Database Module

File:

    database.py

This module manages:

- SQLite connections.
- Database directory creation.
- Table initialization.
- Foreign-key enforcement.
- Initial lesson registration.

## 7.2 Initialize SQLite

Run:

    python database.py

Expected behavior:

The application creates or opens:

    instance/mini_memory.db

The database file is local runtime data.

## 7.3 Run the Database Exercise

    python database_test.py

This script practices inserting and retrieving
lesson records.

## 7.4 Current Tables

The database currently defines:

    lessons
    lesson_progress

## 7.5 Important Database Rules

- Do not commit the SQLite database.
- Use parameterized SQL queries.
- Do not delete the database to resolve ordinary errors.
- Back up important data before schema modifications.
- Preserve stable lesson identifiers.
- Test database changes before integrating them.

## 7.6 Check Git Ignore Rules

    git check-ignore instance/mini_memory.db

If configured correctly, Git should identify the
database as ignored.

---

# 8. Testing the Flask API

The progress API currently supports an initial
registered lesson:

    p1-m1-l1

## 8.1 Read Lesson Progress

Start Flask in one terminal.

In a second PowerShell terminal:

    Invoke-RestMethod `
        -Uri "http://127.0.0.1:5000/api/progress/p1-m1-l1" `
        -Method Get

The API should return the current completion state.

## 8.2 Mark a Lesson Complete

    Invoke-RestMethod `
        -Uri "http://127.0.0.1:5000/api/progress/p1-m1-l1" `
        -Method Put `
        -ContentType "application/json" `
        -Body '{"completed":true}'

## 8.3 Mark a Lesson Incomplete

    Invoke-RestMethod `
        -Uri "http://127.0.0.1:5000/api/progress/p1-m1-l1" `
        -Method Put `
        -ContentType "application/json" `
        -Body '{"completed":false}'

## 8.4 Test an Unknown Lesson

    Invoke-RestMethod `
        -Uri "http://127.0.0.1:5000/api/progress/unknown-lesson" `
        -Method Get

Expected HTTP status:

    404 Not Found

## 8.5 Test Invalid Data

    Invoke-RestMethod `
        -Uri "http://127.0.0.1:5000/api/progress/p1-m1-l1" `
        -Method Put `
        -ContentType "application/json" `
        -Body '{"completed":"yes"}'

Expected HTTP status:

    400 Bad Request

PowerShell may report HTTP 400 and 404 as errors.
That is expected when testing rejected requests.

## 8.6 Persistence Test

1. Mark a lesson complete.
2. Confirm the GET response reports completion.
3. Stop Flask.
4. Restart Flask.
5. Send another GET request.
6. Verify that completion is still saved.

These tests must be run locally before marking
Lesson 3.4 fully verified.

---

# 9. Frontend Development

## 9.1 Template Files

Flask renders templates from:

    templates/

Current templates:

- base.html
- index.html
- roadmap.html

## 9.2 Shared Layout

The shared layout is defined in:

    templates/base.html

It contains the common:

- HTML document structure.
- Header.
- Navigation.
- Footer.
- Stylesheet references.
- Script block.

## 9.3 Page-Specific Content

Individual pages use Jinja template inheritance.

Example:

    {% extends "base.html" %}

    {% block content %}
        <h2>Page Content</h2>
    {% endblock %}

## 9.4 Static Files

CSS and JavaScript are stored in:

    static/

Flask serves these files through its static route.

Reference them through Jinja:

    {{ url_for('static', filename='css/style.css') }}

## 9.5 Frontend Testing

After changing HTML, CSS, or JavaScript:

1. Save the file.
2. Refresh the browser.
3. Inspect the affected feature.
4. Open Developer Tools if necessary.
5. Check the Console for JavaScript errors.
6. Check the Network tab for failed requests.
7. Verify unrelated features still work.

---

# 10. Browser Developer Tools

Browser Developer Tools are important for learning
frontend debugging.

## 10.1 Opening Developer Tools

Common shortcuts:

    F12

or:

    Ctrl + Shift + I

## 10.2 Console

Use the Console to:

- Inspect JavaScript errors.
- Test expressions.
- Inspect variables.
- Log debugging messages.

Example:

    console.log("Mini Memory is running");

## 10.3 Network Tab

Use the Network tab to:

- Inspect HTTP requests.
- Identify failed file loading.
- Check API status codes.
- Inspect JSON responses.
- Measure request timing.

## 10.4 Application Storage

Browser storage tools can inspect localStorage.

Current lesson completion keys include:

    miniMemory.lesson.p1-m1-l1

Do not clear localStorage without considering
whether the saved values need to be preserved.

---

# 11. Git and GitHub Workflow

## 11.1 Check Repository Status

    git status

## 11.2 Inspect Changes

    git diff

Inspect staged changes:

    git diff --staged

## 11.3 Stage Specific Files

Example:

    git add app.py database.py

Avoid blindly adding every file without checking
for unintended or private content.

## 11.4 Commit Changes

    git commit -m "feat: describe the feature"

## 11.5 Push to GitHub

    git push origin main

## 11.6 Pull Latest Changes

Before working on another computer:

    git pull origin main

Make sure local changes are committed or safely
stored before pulling.

## 11.7 Inspect Recent Commits

    git log --oneline -5

## 11.8 Commit Message Conventions

Suggested prefixes:

    feat:   New feature
    fix:    Bug fix
    docs:   Documentation
    refactor: Code restructuring
    test:   Tests
    chore:  Maintenance

Examples:

    feat: add Flask progress API

    fix: restore roadmap checkbox behavior

    docs: update AI learning roadmap

---

# 12. Common Troubleshooting

## 12.1 Python Is Not Recognized

Possible causes:

- Python is not installed.
- The terminal cannot locate Python.
- The wrong interpreter is selected.

Try:

    py --version

Check the installed interpreter and VS Code
Python environment.

## 12.2 Flask Is Not Installed

Typical error:

    ModuleNotFoundError: No module named 'flask'

Activate the correct virtual environment and run:

    python -m pip install Flask

## 12.3 TemplateNotFound

Possible causes:

- Incorrect templates folder name.
- Template placed in the wrong directory.
- Incorrect filename in render_template().

Check:

    templates/index.html
    templates/roadmap.html

## 12.4 CSS or JavaScript Does Not Load

Check that the file exists under:

    static/css/
    static/js/

Inspect Jinja static URLs and the browser Network tab.

## 12.5 Port 5000 Is Already in Use

Another process may be using the port.

First check whether another Flask server is running.

Do not terminate unrelated processes without
identifying them.

If appropriate, stop the previous server using:

    Ctrl + C

## 12.6 SQLite Database Problems

Possible causes:

- Incorrect database path.
- Missing tables.
- Wrong database file.
- Database locked by another process.
- Invalid SQL query.

Check database.py and the exact error message.

Do not delete mini_memory.db as a first troubleshooting step.

## 12.7 HTTP 404 from the Progress API

Possible causes:

- Incorrect endpoint.
- Unknown lesson ID.
- Lesson record not registered in SQLite.

Check the requested URL and the lessons table.

## 12.8 HTTP 400 from the Progress API

Possible causes:

- Invalid JSON.
- Missing completed property.
- completed is not a Boolean.

Valid request body:

    {"completed":true}

Invalid request body:

    {"completed":"true"}

## 12.9 Progress Is Missing After Changing Ports

Browser localStorage is tied to the browser origin.

For example:

    http://127.0.0.1:5500

and:

    http://127.0.0.1:5000

use separate localStorage areas.

Previously saved values may still exist at
the original address.

Do not assume they were deleted.

## 12.10 Git Push Fails

Possible causes:

- Incorrect account authentication.
- Missing repository permissions.
- Remote branch changes.
- Incorrect repository URL.

Check:

    git remote -v
    git status

Review the actual error before attempting fixes.

---

# 13. Programming Standards

## 13.1 Keep Code Understandable

Use meaningful names for variables, functions,
files, and classes.

Favor readable code over unnecessary complexity.

## 13.2 Separate Responsibilities

Keep different responsibilities in appropriate files.

Examples:

- Database operations in database.py.
- Flask routes in app.py or future route modules.
- Website templates in templates/.
- CSS in static/css/.
- JavaScript in static/js/.

## 13.3 Avoid Unnecessary Duplication

Do not copy identical logic across multiple files
without a clear reason.

Reusable functions can simplify maintenance.

## 13.4 Preserve Existing Behavior

When changing a feature, check whether it affects:

- Navigation.
- Lesson completion.
- Dashboard progress.
- API responses.
- Existing saved data.
- Webnovel content.

## 13.5 Stable Identifiers

Use stable lesson IDs such as:

    p1-m1-l1

Do not casually rename IDs after progress has
been associated with them.

## 13.6 Validate Inputs

Data received from users or external sources
must be validated.

This includes:

- Form values.
- API JSON.
- Uploaded files.
- Lesson IDs.
- Future webnovel text inputs.

## 13.7 Handle Errors Explicitly

Errors should be understandable and actionable.

Avoid silently ignoring failures.

## 13.8 Keep Secrets Private

Never commit:

- Passwords.
- Private access tokens.
- API credentials.
- Personal webnovel drafts.
- Private local databases.

---

# 14. Debugging Methodology

When something goes wrong, follow a structured process.

## Step 1 — Reproduce the Problem

Identify the exact actions that trigger the issue.

## Step 2 — Observe the Symptoms

Record:

- Error messages.
- Browser behavior.
- Terminal output.
- Expected behavior.
- Actual behavior.

## Step 3 — Identify the Relevant Component

Determine whether the issue involves:

- HTML.
- CSS.
- JavaScript.
- Flask.
- API requests.
- SQLite.
- Future local AI inference.

## Step 4 — Form a Hypothesis

Identify a plausible cause based on available evidence.

## Step 5 — Test One Change

Avoid making many unrelated changes simultaneously.

## Step 6 — Verify the Result

Confirm the original problem is resolved.

## Step 7 — Check for Regressions

Verify existing features still function.

## Step 8 — Document and Commit

Record the fix using Git when appropriate.

The AI mentor should help explain the cause,
not simply replace large portions of code.

---

# 15. Testing Principles

## 15.1 Test the Expected Behavior

Confirm that features perform their intended function.

## 15.2 Test Invalid Inputs

Test whether the application safely rejects
incorrect information.

## 15.3 Test Persistence

Check that stored data remains after refreshes
and relevant restarts.

## 15.4 Test Existing Features

After adding new functionality, verify that
previous features continue working.

## 15.5 Distinguish Types of Verification

**Code Verified:**
Implementation exists in the repository.

**Locally Tested:**
The developer ran the feature and checked its behavior.

**Fully Verified:**
Required test cases passed and the results were reviewed.

Do not confuse these statuses.

---

# 16. Local AI Development Guidelines

When Mini Memory begins integrating local LLMs,
additional standards will apply.

## 16.1 Preserve Original Chapters

Never overwrite original chapter text without
explicit user confirmation.

## 16.2 Keep AI Processing Local

The target architecture uses AI running on
the developer's own PC.

Do not silently transmit private text to
external services.

## 16.3 Evaluate AI Output

AI-generated refinements should be checked for:

- Grammar improvement.
- Meaning preservation.
- Character consistency.
- Terminology consistency.
- Missing information.
- Invented content.
- Truncation.

## 16.4 Benchmark Models

Measure model performance and quality rather
than assuming one model is best.

## 16.5 Start with Simple Workflows

Build a working passage-refinement prototype
before adding complex memory, fine-tuning,
or multi-agent features.

---

# 17. Recommended Development Session Workflow

Before beginning a new coding session:

1. Open the Mini Memory project.
2. Activate the Python virtual environment.
3. Check git status.
4. Review the most recent commit.
5. Read SESSION_LOG.md.
6. Identify the current lesson.
7. Review the relevant source files.
8. Make one focused change at a time.
9. Run the appropriate tests.
10. Update documentation when necessary.
11. Commit and push completed work.

If the AI mentor loses context, refer to:

    docs/AI_CONTEXT.md

---

# 18. Current Development Checkpoint

**Current Stage:** Stage 3 — Python Backend

**Current Lesson:** 3.4 — Flask API Fundamentals

**Implementation Status:**
GET and PUT lesson progress endpoints are present
in the repository.

**Outstanding Verification:**

- [ ] Verify GET request.
- [ ] Verify PUT request.
- [ ] Verify HTTP 400 handling.
- [ ] Verify HTTP 404 handling.
- [ ] Verify persistence after Flask restart.
- [ ] Verify dashboard and roadmap still work.

**Next Lesson:**

Lesson 3.5 — JavaScript Fetch API and
Frontend Integration.

This lesson will connect the existing frontend
to the Flask progress API and SQLite database.

---

# 19. Related Documentation

- [Project README](../README.md)
- [Development Roadmap](DEVELOPMENT_ROADMAP.md)
- [AI Learning Roadmap](AI_LEARNING_ROADMAP.md)
- [Webnovel AI Requirements](WEBNOVEL_AI.md)
- [Architecture](ARCHITECTURE.md)
- [AI Context](AI_CONTEXT.md)
- [Session Log](SESSION_LOG.md)

---

# Final Development Principle

**Learn the tools. Understand the code.
Test the behavior. Preserve working functionality.**

Every programming skill developed through Mini Memory
supports the long-term objective:

Build and maintain a reliable local AI capable of
polishing and refining webnovel chapters faithfully.
