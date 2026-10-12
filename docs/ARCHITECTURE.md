
# Mini Memory — System Architecture

## Technical Design and Application Structure

This document describes the architecture, technologies,
components, data flow, and technical design decisions
of Mini Memory.

Mini Memory is a learning project whose primary goal
is to build a locally hosted AI for polishing and
refining webnovel chapters.

**Repository:** https://github.com/earl2k22/mini-memory

**Status:** Active Development

**Current Stage:** Stage 3 — Python Backend and Database

**Current Checkpoint:** Lesson 3.4 — Flask API Fundamentals

**Next Lesson:** Lesson 3.5 — JavaScript Fetch API

---

# 1. Architecture Goals

Mini Memory should be designed to support:

1. Learning and understanding each component.
2. A maintainable frontend and backend.
3. Local data ownership and privacy.
4. Reliable webnovel polishing using a local LLM.
5. Long-chapter processing.
6. Future character and terminology memory.
7. Safe communication between the browser and server.
8. Access from authorized devices on the local network.
9. Testing, debugging, and future expansion.

The architecture should remain understandable.

Complex technologies should be introduced only
when they provide a clear benefit.

---

# 2. High-Level Architecture

## 2.1 Current Architecture

The existing application uses:

    +-----------------------------+
    |        Web Browser          |
    |                             |
    |  HTML + CSS + JavaScript    |
    |                             |
    |  Dashboard / Learning UI    |
    +--------------+--------------+
                   |
                   | HTTP
                   v
    +-----------------------------+
    |        Flask Server         |
    |                             |
    |  app.py                     |
    |  Jinja Templates            |
    |  Progress API               |
    +--------------+--------------+
                   |
                   | SQL
                   v
    +-----------------------------+
    |      SQLite Database        |
    |                             |
    |  lessons                    |
    |  lesson_progress            |
    +-----------------------------+

Important:

The Flask progress API exists, but the frontend
still stores its completion data using localStorage.

Browser-to-database integration is planned for
Lesson 3.5.

## 2.2 Target Architecture

The long-term design is:

    +----------------------------------+
    |       Browser Interface          |
    |                                  |
    |  Dashboard                       |
    |  Learning Roadmap                |
    |  Webnovel Editor                 |
    +----------------+-----------------+
                     |
                     | HTTP / JSON
                     v
    +----------------------------------+
    |         Flask Backend            |
    |                                  |
    |  Web Routes                      |
    |  Progress API                    |
    |  Webnovel Processing API         |
    |  Input Validation                |
    |  Authentication                  |
    +----------+-------------+---------+
               |             |
               |             |
               v             v
    +----------------+  +----------------+
    | SQLite         |  | Refinement     |
    | Database       |  | Pipeline       |
    +----------------+  +-------+--------+
                                |
                                | Local API
                                v
                        +----------------+
                        | Local AI       |
                        | Runtime        |
                        |                |
                        | Ollama or      |
                        | alternative    |
                        +-------+--------+
                                |
                                v
                        +----------------+
                        | Language Model |
                        +----------------+

The local AI runtime, webnovel pipeline, and
authentication are planned, not yet implemented.

---

# 3. Technology Stack

## Frontend

| Technology | Responsibility |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Browser interactions |
| Jinja | Flask template rendering |
| Fetch API | Planned backend communication |

## Backend

| Technology | Responsibility |
|---|---|
| Python | Application logic |
| Flask | Web server and HTTP routing |
| sqlite3 | SQLite database access |
| pathlib | Filesystem path management |
| JSON | API data exchange |

## Local AI

| Technology | Responsibility |
|---|---|
| Ollama | Candidate local AI runtime |
| Local LLM | Webnovel refinement |
| Prompt Engineering | Model behavior control |
| Text Chunking | Long-chapter processing |
| RAG | Optional contextual memory |

The local AI model and runtime will be selected
after hardware assessment and benchmarking.

---

# 4. Current Project Structure

The following structure reflects the implementation
reviewed in the GitHub repository.

Some local files are intentionally excluded from Git.

    mini-memory/
    |
    |-- app.py
    |-- database.py
    |-- database_test.py
    |-- README.md
    |-- .gitignore
    |
    |-- requirements.txt       [Verify locally]
    |
    |-- templates/
    |   |-- base.html
    |   |-- index.html
    |   |-- roadmap.html
    |
    |-- static/
    |   |-- css/
    |   |   |-- style.css
    |   |
    |   |-- js/
    |       |-- progress.js
    |       |-- roadmap-data.js
    |       |-- roadmap.js
    |       |-- lesson-data.js
    |       |-- lessons.js
    |       |-- dashboard.js
    |
    |-- docs/
    |   |-- DEVELOPMENT_ROADMAP.md
    |   |-- AI_LEARNING_ROADMAP.md
    |   |-- WEBNOVEL_AI.md
    |   |-- ARCHITECTURE.md
    |
    |-- instance/              [Local runtime data]
    |   |-- mini_memory.db     [Ignored by Git]
    |
    |-- .venv/                 [Local Python environment]

The remaining documentation files will be added
during the documentation organization process.

---

# 5. Backend Architecture

## 5.1 Flask Application

**File:** app.py

This is the current backend entry point.

Its responsibilities include:

- Creating the Flask application.
- Registering web routes.
- Rendering templates.
- Initializing the database.
- Handling lesson progress requests.
- Validating request data.
- Returning HTTP and JSON responses.

Currently, app.py contains both page routes and
progress API routes.

This is acceptable for the current learning stage.

As the application grows, routes may be separated
into Flask Blueprints.

Blueprints are a future refactoring option,
not a requirement for the present implementation.

## 5.2 Current HTTP Routes

| Method | Route | Purpose |
|---|---|---|
| GET | / | Dashboard |
| GET | /index.html | Dashboard alternative |
| GET | /roadmap.html | Learning roadmap |
| GET | /health | Application health response |
| GET | /api/progress/<lesson_id> | Read lesson completion |
| PUT | /api/progress/<lesson_id> | Update lesson completion |

The progress endpoints currently depend on lesson
records existing in the SQLite lessons table.

Only the first lesson is explicitly seeded by
the initialization code.

Other lessons require registration before their
completion can be managed through these APIs.

## 5.3 API Response Format

A successful GET response may resemble:

    {
      "lesson_id": "p1-m1-l1",
      "completed": false,
      "completed_at": null
    }

The PUT endpoint accepts JSON such as:

    {
      "completed": true
    }

Expected error responses include:

- HTTP 400 for invalid request data.
- HTTP 404 for unknown lesson IDs.

These behaviors are implemented in source code.
Local execution tests still require verification.

---

# 6. Frontend Architecture

## 6.1 Flask Templates

**Folder:** templates/

Flask uses Jinja to render pages.

### base.html

Provides shared application layout:

- HTML document structure.
- Stylesheet references.
- Header.
- Navigation bar.
- Main content block.
- Footer.
- JavaScript block.

### index.html

Contains the dashboard interface:

- Welcome section.
- Learning progress.
- Module completion information.
- Feature cards.

### roadmap.html

Contains the learning roadmap:

- AI roadmap overview.
- Phase 1 module-topic checkboxes.
- Existing Phase 2 and 3 sections.
- Dynamically rendered remaining phases.
- Nested lesson preview.

Both pages extend base.html.

## 6.2 CSS

**File:** static/css/style.css

Provides:

- Dark theme.
- Navigation styling.
- Dashboard layout.
- Cards.
- Progress bars.
- Lesson completion styling.
- Expandable roadmap styling.

CSS should remain separate from Python business logic.

## 6.3 JavaScript Responsibilities

| File | Responsibility |
|---|---|
| progress.js | Original Phase 1 checkbox tracking |
| roadmap-data.js | Canonical 12-phase roadmap data |
| roadmap.js | Dynamic expandable phase cards |
| lesson-data.js | Nested phase, module, and lesson data |
| lessons.js | Individual lesson completion UI |
| dashboard.js | Aggregated progress display |

JavaScript files should have distinct responsibilities.

Avoid duplicating the same progress logic
across multiple files.

---

# 7. Current Data Architecture

Mini Memory currently has two different sources
of progress-related information.

## 7.1 Browser localStorage

The frontend currently reads and writes progress
using browser localStorage.

Existing key patterns include:

    miniMemory.phase1-module1

and:

    miniMemory.lesson.p1-m1-l1

The first pattern belongs to the original
Phase 1 module-topic tracker.

The second pattern belongs to the newer
individual lesson activity tracker.

These systems have not yet been consolidated.

Browser localStorage is specific to the browser
origin and does not automatically synchronize
between devices.

## 7.2 SQLite

The backend has an initial SQLite schema.

Database path:

    instance/mini_memory.db

The database file is local runtime data and
should not be committed to the public repository.

## 7.3 Lessons Table

Current schema:

    lessons
    ------------------------
    lesson_id     TEXT PRIMARY KEY
    title         TEXT NOT NULL
    lesson_type   TEXT NOT NULL

Purpose:

Store known lesson identifiers and metadata.

Example record:

    lesson_id: p1-m1-l1
    title: What is a Large Language Model?
    lesson_type: lesson

## 7.4 Lesson Progress Table

Current schema:

    lesson_progress
    ------------------------
    lesson_id     TEXT PRIMARY KEY
    completed     INTEGER NOT NULL DEFAULT 0
    completed_at  TEXT

The completed field uses:

    0 = Not completed
    1 = Completed

The completed_at field stores the completion
timestamp when applicable.

lesson_id is a foreign key referencing
lessons.lesson_id.

SQLite foreign-key enforcement is enabled
when opening connections through database.py.

## 7.5 Future Relational Schema

The intended structure may eventually include:

    phases
       |
       v
    modules
       |
       v
    lessons
       |
       v
    lesson_progress

This is a future database design.

The current SQLite implementation contains
only lessons and lesson_progress.

The frontend's richer phase/module hierarchy
has not yet been migrated into the database.

---

# 8. Database Access

**File:** database.py

This module handles:

- Database directory creation.
- SQLite connections.
- Row configuration.
- Foreign-key enforcement.
- Initial table creation.
- Initial lesson registration.

## Connection Function

    get_connection()

Opens the database and configures SQLite access.

## Initialization Function

    initialize_database()

Creates required tables if they do not exist
and registers the first known lesson.

## SQL Safety

Database queries must use parameterized values
rather than inserting raw user input into SQL.

Example:

    SELECT lesson_id
    FROM lessons
    WHERE lesson_id = ?

This helps prevent SQL injection.

## Database Evolution

Future database changes should use a controlled
schema migration approach.

Avoid deleting existing databases to apply
new features.

Back up important data before structural changes.

---

# 9. Browser-to-Server Communication

## 9.1 Current State

The browser and Flask backend currently operate
with separate progress storage mechanisms.

Frontend:

    JavaScript -> localStorage

Backend:

    HTTP API -> SQLite

The frontend has not yet been connected
to the backend progress API.

## 9.2 Planned Integration

Lesson 3.5 will introduce JavaScript fetch().

Expected communication flow:

    User checks a lesson
             |
             v
    JavaScript event listener
             |
             v
    HTTP PUT request
             |
             v
    Flask validates request
             |
             v
    SQLite saves completion
             |
             v
    Flask returns JSON
             |
             v
    Browser updates the interface

Loading progress will involve HTTP GET requests.

## 9.3 Data Migration

Before replacing localStorage:

1. Identify existing storage keys.
2. Back up existing saved values.
3. Register all known lessons in SQLite.
4. Define a safe import process.
5. Avoid overwriting newer server records.
6. Test incomplete and completed states.
7. Verify persistence.
8. Remove old dependencies only after testing.

Git commits do not back up browser localStorage.

---

# 10. Webnovel AI Architecture

This section describes planned functionality.

It has not yet been implemented.

## 10.1 Refinement Pipeline

Proposed pipeline:

    Input Chapter
         |
         v
    Input Validation
         |
         v
    Text Preparation
         |
         v
    Prompt Construction
         |
         v
    Context and Glossary
         |
         v
    Local AI Inference
         |
         v
    Output Verification
         |
         v
    User Review
         |
         v
    Export

The pipeline must improve writing quality
without changing the story.

## 10.2 Model Runtime

A candidate runtime is Ollama.

Its role would be to:

- Load local models.
- Accept inference requests.
- Generate model responses.
- Expose a local API.

The model and runtime must be tested on the
actual home PC before selection.

## 10.3 Backend Integration

Flask will eventually send requests to the
local AI runtime.

The webnovel editing interface should communicate
with Flask rather than directly exposing
internal AI services to remote devices.

## 10.4 Prompt Construction

The backend will eventually construct prompts
from:

- Editing profile.
- Original chapter text.
- Meaning-preservation rules.
- Terminology restrictions.
- Optional character glossary.
- Optional contextual references.

Prompts will be evaluated against real chapters
before production use.

---

# 11. Long-Chapter Architecture

Many webnovel chapters may require chunking.

A future processing system may include:

    Original Chapter
           |
           v
    Paragraph Analysis
           |
           v
    Token Budget Calculation
           |
           v
    Chunk Generation
           |
           v
    Sequential Refinement
           |
           v
    Chunk Validation
           |
           v
    Chapter Reassembly
           |
           v
    Completeness Review

## Important Requirements

- Preserve paragraph boundaries when possible.
- Avoid splitting dialogue unnecessarily.
- Maintain chapter continuity.
- Prevent duplicate output from overlapping context.
- Detect missing sections.
- Avoid silent truncation.
- Maintain consistent names and terminology.

The first prototype may support shorter input
before advanced chunking is implemented.

---

# 12. Planned Character and Terminology Memory

The AI should eventually maintain relevant
information across chapters.

Possible categories:

- Characters.
- Alternate names.
- Locations.
- Organizations.
- Techniques and abilities.
- Items and artifacts.
- Cultivation levels.
- Important worldbuilding details.

A structured glossary should be considered before
introducing vector search.

RAG may be added if retrieval improves consistency
and can be supported by the available hardware.

Fine-tuning is optional.

---

# 13. Security Architecture

Mini Memory is intended to run locally,
but local hosting does not automatically make
an application secure.

## Current Development Security

- Flask debug mode is used for local development.
- The API currently has no authentication.
- SQLite remains in a Git-ignored directory.
- Private content should not be committed.

## Before Phone Access

The application should:

- Use an appropriate server configuration.
- Disable Flask debug mode.
- Introduce authentication.
- Validate inputs and file uploads.
- Restrict unnecessary network exposure.
- Protect stored chapters and credentials.
- Consider authorization and request forgery risks.
- Verify access only from intended devices.

The Flask development server and current
unauthenticated API must not be exposed
directly to the public internet.

---

# 14. Error Handling and Reliability

Future application features must handle:

- Database connection errors.
- Invalid user input.
- Unknown lesson IDs.
- Failed API requests.
- Unavailable AI runtime.
- Missing model files.
- AI inference timeouts.
- Truncated AI output.
- Invalid file encodings.
- Long-chapter processing failures.
- Insufficient disk or memory.

The frontend should clearly communicate errors
without silently losing user data.

Important operations should be tested before
being considered complete.

---

# 15. Performance Considerations

Current performance needs are modest because
the application mainly displays educational
content and stores completion states.

Local AI inference will introduce more demanding
hardware requirements.

Future measurements should include:

- Tokens per second.
- Model loading time.
- Memory consumption.
- GPU utilization.
- Context window use.
- Time to refine a complete chapter.
- Reliability during long-running processing.

Optimization should be guided by measurements,
not assumptions.

---

# 16. Architectural Design Principles

## 16.1 Separation of Responsibilities

Different files should perform distinct jobs.

Avoid mixing unrelated frontend, database,
and AI processing logic unnecessarily.

## 16.2 Start Simple

Use existing project technologies before adding
new frameworks or infrastructure.

Avoid introducing complexity without a clear benefit.

## 16.3 Preserve Working Features

Refactoring should not unnecessarily break:

- Navigation.
- Learning progress.
- Lesson identifiers.
- Saved data.
- Existing APIs.
- Website styling.

## 16.4 Maintain Stable Identifiers

Lesson IDs should remain stable.

Changing IDs can break progress associations
and complicate migration.

## 16.5 Protect Original Webnovel Content

AI refinement must not overwrite original
chapters without explicit user action.

## 16.6 Support Model Replacement

The AI processing architecture should allow
a different model to be selected without
rewriting the entire application.

## 16.7 Learn Every Component

Architecture decisions should be explained
and understood by the developer.

Mini Memory is a practical learning project,
not merely an application to assemble.

---

# 17. Current Implementation Status

| Component | Status |
|---|---|
| HTML/CSS frontend | Implemented |
| JavaScript lesson tracking | Implemented |
| Browser localStorage | Implemented |
| Flask application | Implemented |
| Jinja templates | Implemented |
| SQLite table definitions | Implemented |
| SQLite progress API | Code implemented |
| Local API testing | Verification pending |
| JavaScript Fetch integration | Planned |
| Full lesson catalog in SQLite | Planned |
| Local AI runtime | Not integrated |
| Language model | Not selected |
| Webnovel polishing pipeline | Not implemented |
| Chapter editing interface | Not implemented |
| Character and terminology memory | Planned |
| Authorized phone access | Planned |

---

# 18. Next Architecture Milestone

## Lesson 3.5 — JavaScript Fetch API

Before this lesson:

- Verify Lesson 3.4 GET and PUT requests.
- Verify database persistence.
- Verify error responses.
- Confirm existing pages still load correctly.

Then:

1. Register the full lesson catalog.
2. Connect the browser to Flask.
3. Read progress through the API.
4. Save progress through the API.
5. Design and test localStorage migration.
6. Update dashboard calculations.
7. Verify consistency between pages.

This will establish the foundation for
future webnovel-processing API requests.

---

# 19. Related Documentation

- [Project README](../README.md)
- [Development Roadmap](DEVELOPMENT_ROADMAP.md)
- [AI Learning Roadmap](AI_LEARNING_ROADMAP.md)
- [Webnovel AI Requirements](WEBNOVEL_AI.md)
- [Development Guide](DEVELOPMENT_GUIDE.md)
- [AI Context](AI_CONTEXT.md)
- [Session Log](SESSION_LOG.md)

---

# Final Architectural Principle

Mini Memory should remain understandable,
maintainable, and focused on its original goal:

**Learn software engineering by building a locally
hosted AI that faithfully polishes and refines
webnovel chapters.**

Every new component should either help build
the core product or develop the knowledge
needed to maintain and improve it.
