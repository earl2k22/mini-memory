
# Mini Memory — Development Session Log

## Current Progress, Checkpoints, and Continuation Notes

This document records the latest development status
of Mini Memory.

It should be updated after meaningful coding sessions
to help maintain project continuity.

**Project:** Mini Memory  
**Repository:** https://github.com/earl2k22/mini-memory  
**Last Documentation Update:** October 13, 2026  
**Current Stage:** Stage 3 — Python Backend and Database  
**Current Lesson:** 3.4 — Flask API Fundamentals  
**Next Lesson:** 3.5 — JavaScript Fetch API  

---

# 1. Project Reminder

Mini Memory is my personal software engineering
and artificial intelligence learning project.

**My main goal is to learn programming by building
a local AI that polishes and refines webnovels.**

The eventual AI application must:

- Improve grammar and sentence structure.
- Improve readability and writing quality.
- Preserve the original plot and story meaning.
- Maintain character identities and terminology.
- Avoid hallucinated details and missing content.
- Process long webnovel chapters.
- Run locally on my personal computer.
- Eventually be accessible from authorized devices.

The learning dashboard is a supporting project,
not the final product.

---

# 2. Current Development Summary

## Stage 1 — Website Foundations

**Status:** Completed

Lessons:

- [x] 1.1 — Git and GitHub Fundamentals.
- [x] 1.2 — HTML Foundations.
- [x] 1.3 — CSS Foundations.
- [x] 1.4 — CSS Grid and Dashboard Layout.
- [x] 1.5 — Website Navigation.

## Stage 2 — JavaScript and Progress Tracking

**Status:** Completed

Lessons:

- [x] 2.1 — JavaScript Fundamentals.
- [x] 2.2 — Dynamic Progress and localStorage.
- [x] 2.3 — JavaScript Objects and Arrays.
- [x] 2.4 — Expandable Roadmap Cards.
- [x] 2.5 — Hierarchical Lesson Data.
- [x] 2.6 — Individual Lesson Completion.
- [x] 2.7 — Unified Progress Dashboard.

## Stage 3 — Python Backend and Database

**Status:** In Progress

Lessons:

- [x] 3.1 — Flask Backend Foundations.
- [x] 3.2 — Jinja Templates and Routing.
- [x] 3.3 — SQLite Fundamentals (code implemented).
- [x] 3.4 — Flask API Fundamentals (code implemented).
- [ ] 3.4 — Complete local testing and verification.
- [ ] 3.5 — JavaScript Fetch API.
- [ ] 3.6 — Local Network Access.

**Important:** Lesson 3.4 implementation is present,
but passing local test results have not yet been
independently confirmed.

---

# 3. Last Development Checkpoint

## Lesson 3.4 — Flask API Fundamentals

### Objective

Create API endpoints that communicate with
SQLite to retrieve and update lesson progress.

### Implemented Source Code

The GitHub repository was reviewed during
the documentation planning session.

The following implementation was present:

- [x] Flask imports for JSON requests.
- [x] SQLite initialization from app.py.
- [x] GET /api/progress/<lesson_id>.
- [x] PUT /api/progress/<lesson_id>.
- [x] JSON input validation.
- [x] Unknown lesson handling.
- [x] Parameterized SQL queries.
- [x] SQLite UPSERT for progress.
- [x] UTC completion timestamps.
- [x] Initial lesson registration in database.py.

### Outstanding Tests

- [ ] Start Flask successfully.
- [ ] GET returns current lesson completion.
- [ ] PUT with true saves completion.
- [ ] PUT with false resets completion.
- [ ] Invalid Boolean input returns HTTP 400.
- [ ] Unknown lesson ID returns HTTP 404.
- [ ] Saved progress survives a Flask restart.
- [ ] Homepage still loads.
- [ ] Roadmap page still loads.
- [ ] Existing JavaScript features still work.

### Current Assessment

**Implementation:** Present in repository.

**Local Execution:** Not independently verified.

**Status:** Ready for testing.

Do not mark these tests complete until their
results are confirmed.

---

# 4. Important Current Files

## Flask and Database

    app.py
    database.py
    database_test.py

## Templates

    templates/base.html
    templates/index.html
    templates/roadmap.html

## Frontend JavaScript

    static/js/progress.js
    static/js/roadmap-data.js
    static/js/roadmap.js
    static/js/lesson-data.js
    static/js/lessons.js
    static/js/dashboard.js

## Styling

    static/css/style.css

## Documentation

    README.md
    docs/DEVELOPMENT_ROADMAP.md
    docs/AI_LEARNING_ROADMAP.md
    docs/WEBNOVEL_AI.md
    docs/ARCHITECTURE.md
    docs/DEVELOPMENT_GUIDE.md
    docs/AI_CONTEXT.md
    docs/SESSION_LOG.md

## Local Runtime Data

    instance/mini_memory.db
    .venv/

Local runtime files should remain excluded from Git.

**Note:** Documentation file creation is tracked
separately from source-code implementation.

---

# 5. Current Architecture

The website currently uses:

    Browser
       |
       v
    Flask
       |
       v
    Jinja Templates

For lesson completion:

    JavaScript
       |
       v
    Browser localStorage

The backend also has a separate progress API:

    HTTP GET / PUT
          |
          v
    Flask API
          |
          v
    SQLite

These two progress systems have not yet been
integrated.

The future goal is:

    Browser JavaScript
          |
          v
    Flask Progress API
          |
          v
    SQLite Database

Later, the application will integrate a local
language model for webnovel polishing.

---

# 6. Known Limitations

- Browser progress is still stored in localStorage.
- The SQLite database contains only the initial
  seeded lesson unless additional records were
  inserted locally.
- The full lesson catalog is not yet registered.
- SQLite API behavior still needs local verification.
- Existing browser progress has not been migrated.
- Cross-device synchronization is unavailable.
- Authentication is not implemented.
- Phone access is not configured.
- Local AI inference has not been implemented.
- No language model has been selected.
- Webnovel polishing functionality is still planned.
- requirements.txt was not found in the previous
  GitHub repository inspection.

These limitations should be reviewed as
development progresses.

---

# 7. Next Development Session

## Step 1 — Check Git Status

Open the Mini Memory project and run:

    git status

Review uncommitted changes before continuing.

## Step 2 — Activate Python

    .\.venv\Scripts\Activate.ps1

## Step 3 — Start Flask

    python app.py

Verify that the application starts successfully.

## Step 4 — Verify API Behavior

Open a second PowerShell terminal.

Test reading completion:

    Invoke-RestMethod `
        -Uri "http://127.0.0.1:5000/api/progress/p1-m1-l1" `
        -Method Get

Test saving completion:

    Invoke-RestMethod `
        -Uri "http://127.0.0.1:5000/api/progress/p1-m1-l1" `
        -Method Put `
        -ContentType "application/json" `
        -Body '{"completed":true}'

Read the value again.

Then test:

- PUT with false.
- Unknown lesson ID.
- Invalid completion values.
- Persistence after restarting Flask.

## Step 5 — Verify Frontend

Open:

    http://127.0.0.1:5000/

And:

    http://127.0.0.1:5000/roadmap.html

Check navigation, cards, and existing
checkbox behavior.

## Step 6 — Continue the Next Lesson

When the checkpoint passes:

**Lesson 3.5 — JavaScript Fetch API
and Frontend Integration**

The lesson will focus on:

- Understanding fetch().
- Sending requests from JavaScript.
- Reading JSON API responses.
- Saving lesson progress through Flask.
- Handling errors.
- Registering the full lesson catalog.
- Planning safe localStorage migration.
- Updating dashboard calculations.

Do not erase existing localStorage progress
during migration.

---

# 8. Current Documentation Organization

The project documentation is separated into
eight Markdown files.

| Document | Responsibility |
|---|---|
| README.md | Project overview and documentation hub |
| DEVELOPMENT_ROADMAP.md | Programming lessons and progress |
| AI_LEARNING_ROADMAP.md | Canonical 12-phase AI curriculum |
| WEBNOVEL_AI.md | Core AI product requirements |
| ARCHITECTURE.md | Technical architecture |
| DEVELOPMENT_GUIDE.md | Setup, commands, and troubleshooting |
| AI_CONTEXT.md | AI mentoring and recovery rules |
| SESSION_LOG.md | Latest development checkpoint |

All documentation links in README.md should
point to the correct files in docs/.

---

# 9. Session Log Template

Copy this section for future development sessions.

## Session — YYYY-MM-DD

**Stage:**  
**Lesson:**  
**Objective:**  

### Changes Made

- [ ] Describe completed change.
- [ ] Describe completed change.

### Files Changed

- filename.ext

### Tests Performed

- [ ] Test name — result.

### Problems Encountered

- Describe errors or blockers.

### Resolutions

- Describe fixes and explanations.

### Git Commit

Commit hash or message:

    Not recorded

### Remaining Tasks

- [ ] Pending task.

### Next Session

Describe the exact next checkpoint.

---

# 10. Documentation Maintenance Rules

1. Update SESSION_LOG.md after meaningful
   development sessions.
2. Keep recent checkpoints accurate.
3. Distinguish source-code implementation
   from successful local testing.
4. Record outstanding blockers.
5. Preserve lesson numbering.
6. Update DEVELOPMENT_ROADMAP.md when a lesson
   is completed and verified.
7. Update ARCHITECTURE.md after major technical
   changes.
8. Update WEBNOVEL_AI.md when product
   requirements change.
9. Update AI_CONTEXT.md when mentoring or
   recovery rules change.
10. Avoid duplicating entire documents.

The latest session log should be a quick
way to understand the current project state.

---

# 11. Related Documentation

- [Project README](../README.md)
- [Development Roadmap](DEVELOPMENT_ROADMAP.md)
- [AI Learning Roadmap](AI_LEARNING_ROADMAP.md)
- [Webnovel AI](WEBNOVEL_AI.md)
- [Architecture](ARCHITECTURE.md)
- [Development Guide](DEVELOPMENT_GUIDE.md)
- [AI Context](AI_CONTEXT.md)

---

# Current Stopping Point

**Stage 3 — Lesson 3.4: Flask API Fundamentals**

The implementation exists in the repository.

Local API tests and persistence verification
remain outstanding.

**Next:** Complete the checkpoint and proceed
to Lesson 3.5 — JavaScript Fetch API.

**Primary Objective:** Learn software engineering
by building a locally hosted AI capable of
faithfully polishing and refining webnovels.
