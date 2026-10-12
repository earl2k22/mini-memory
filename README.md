
# Mini Memory
### Localised AI Model for General Use

A personal, self-hosted learning management platform and
AI assistant developed step by step as a software
engineering learning project.

**Developer:** earl2k22
**Repository:** https://github.com/earl2k22/mini-memory
**Status:** Active Development
**Current Stage:** Stage 3 — Python Backend
**Current Lesson:** 3.1 completed/review pending
**Next Lesson:** 3.2 — Flask Templates and Routing

---

# 1. Project Overview

Mini Memory is a personal project designed to teach
software development while building a practical
self-hosted AI system.

The developer writes, tests, troubleshoots, and commits
the code with assistance from an AI programming mentor.

The project has two interconnected learning tracks:

1. Website Development — Building Mini Memory itself.
2. Local AI Learning — Understanding, running, and
   customizing local language models.

The website will eventually become the interface used
to study the AI curriculum and interact with the AI.

## Primary Goals

- Build a responsive learning dashboard.
- Track phases, modules, lessons, labs, and checkpoints.
- Save progress persistently using a database.
- Develop a webnovel polishing application.
- Run language models locally using Ollama.
- Access the self-hosted website using a phone.
- Operate without cloud AI or public internet when
  the phone and PC share a local network.
- Expand into a general-purpose personal AI assistant.

## Guiding Principle

Understand the code, implement it, test it, and commit it.

The AI acts as a mentor and code reviewer.
The developer remains responsible for implementation.

---

# 2. Technology Stack

## Frontend
- HTML5 — Website structure
- CSS3 — Styling and responsive design
- JavaScript — Interactivity and progress tracking

## Backend
- Python — Backend programming language
- Flask — Web application framework
- SQLite — Planned persistent database

## Artificial Intelligence
- Ollama — Planned local model runtime
- Local LLM — Model to be chosen after hardware testing
- RAG — Planned retrieval-based knowledge system

## Development Tools
- Visual Studio Code
- Git
- GitHub
- VS Code Live Server

---

# 3. Development Roadmap

This section tracks building the Mini Memory website.

Legend:
- [x] Completed
- [ ] Not completed / awaiting verification

## Stage 1 — Git, HTML, CSS and Navigation

### Module 1: Version Control
- [x] Lesson 1.1 — Git and GitHub Fundamentals
- [x] Task — Create GitHub repository
- [x] Task — Create README.md
- [x] Task — Understand commits

### Module 2: HTML Foundations
- [x] Lesson 1.2 — Website Structure
- [x] Task — Create index.html
- [x] Task — Learn semantic HTML
- [x] Task — Build first homepage

### Module 3: CSS Foundations
- [x] Lesson 1.3 — CSS Fundamentals
- [x] Task — Create static/css/style.css
- [x] Task — Connect CSS to HTML
- [x] Task — Customize colors

### Module 4: Dashboard Layout
- [x] Lesson 1.4 — CSS Grid and Dashboard Cards
- [x] Task — Create responsive dashboard cards
- [x] Task — Add progress bar styling
- [x] Task — Improve mobile layout

### Module 5: Navigation
- [x] Lesson 1.5 — Buttons, Links, and Navigation
- [x] Task — Create navigation bar
- [x] Task — Create roadmap.html
- [x] Task — Connect dashboard to roadmap

## Stage 2 — JavaScript and Progress Tracking

### Module 1: JavaScript Foundations
- [x] Lesson 2.1 — JavaScript Fundamentals
- [x] Task — Create progress.js
- [x] Task — Build first completion control

### Module 2: Dynamic Progress
- [x] Lesson 2.2 — Dynamic Progress Tracking
- [x] Task — Create multiple checkboxes
- [x] Task — Calculate percentages
- [x] Task — Save progress using localStorage

### Module 3: Structured Roadmap
- [x] Lesson 2.3 — JavaScript Objects and Arrays
- [x] Task — Create roadmap-data.js
- [x] Task — Define 12 AI learning phases
- [x] Task — Generate roadmap cards dynamically

### Module 4: Interactive Roadmap
- [x] Lesson 2.4 — Expandable Roadmap Cards
- [x] Task — Use details and summary elements
- [x] Task — Separate roadmap and progress scripts
- [x] Task — Open Phase 4 automatically

### Module 5: Lesson Data Modeling
- [x] Lesson 2.5 — Phase, Module, Lesson Hierarchy
- [x] Task — Create lesson-data.js
- [x] Task — Create lessons.js
- [x] Task — Render nested lesson structure

### Module 6: Lesson Completion
- [x] Lesson 2.6 — Dynamic Lesson and Module Progress
- [x] Task — Generate checkboxes from lesson data
- [x] Task — Save individual completion states
- [x] Task — Show Module Completed! at 100%

### Module 7: Unified Dashboard
- [x] Lesson 2.7 — Unified Progress Dashboard
- [x] Task — Create dashboard.js
- [x] Task — Calculate tracked activity progress
- [x] Task — Display saved progress on homepage

## Stage 3 — Python Backend and Flask

### Module 1: Backend Foundations
- [x] Lesson 3.1 — Introduction to Backend Development
- [x] Task — Create app.py
- [x] Task — Implement homepage and roadmap routes
- [x] Task — Implement /health endpoint
- [ ] Verify Flask runs locally
- [ ] Verify requirements.txt is committed
- [ ] Verify .gitignore is committed

### Module 2: Flask Templates
- [ ] Lesson 3.2 — Flask Templates and Routing
- [ ] Task — Create templates directory
- [ ] Task — Convert HTML pages into Flask templates
- [ ] Task — Introduce reusable page components

### Module 3: Database Fundamentals
- [ ] Lesson 3.3 — Introduction to SQLite
- [ ] Task — Design database schema
- [ ] Task — Create local database
- [ ] Task — Understand database queries

### Module 4: Backend Progress Storage
- [ ] Lesson 3.4 — Flask API Fundamentals
- [ ] Task — Create progress API endpoints
- [ ] Task — Save completion data to SQLite
- [ ] Task — Retrieve saved progress

### Module 5: Browser and Server Integration
- [ ] Lesson 3.5 — JavaScript Fetch API
- [ ] Task — Connect frontend to Flask backend
- [ ] Task — Replace localStorage as primary storage
- [ ] Task — Plan migration of existing progress

### Module 6: Phone Access
- [ ] Lesson 3.6 — Local Network Access
- [ ] Task — Understand LAN and IP addresses
- [ ] Task — Configure safe local server access
- [ ] Task — Test website on phone
- [ ] Task — Introduce authentication and access control

---

# 4. Local AI Learning Roadmap

This is separate from the website development roadmap.

The 12 AI phases must preserve their established order.

## Phase 1 — Project Foundations
- Module 1: LLM Basics and Terminology
- Module 2: Local AI Architecture
- Module 3: Defining Project Goals
- Module 4: Success Criteria and Limitations

## Phase 2 — Hardware Assessment
- Module 1: CPU, RAM, GPU and VRAM
- Module 2: Model Sizes and Quantization
- Module 3: Memory and Disk Requirements
- Module 4: Performance Planning

## Phase 3 — Local AI Environment
- Module 1: Ollama or LM Studio
- Module 2: Installation and Configuration
- Module 3: Downloading Models
- Module 4: First Inference and Troubleshooting

## Phase 4 — Model Selection and Benchmarking
- Model Families and Licenses
- Parameters and Context Windows
- Speed, Memory and Quality Testing
- Choosing a Default Model

## Phase 5 — Prompt Engineering for Webnovels
- System Prompts and Instructions
- Style Preservation
- Terminology and Character Rules
- Reducing Omissions and Inventions

## Phase 6 — Long-Chapter Processing
- Tokens and Context Budgets
- Intelligent Text Chunking
- Overlap and Continuity
- Chapter-Level Verification

## Phase 7 — Python and Local AI APIs
- Python Foundations
- Files, Strings and JSON
- HTTP and Ollama APIs
- Errors, Retries and Logging

## Phase 8 — Webnovel Polishing Application
- Application Interface Design
- File Upload and Export
- Side-by-Side Text Comparison
- Revision History and Batch Processing

## Phase 9 — Knowledge and Memory (RAG)
- Embeddings and Vector Search
- Character and Location Glossaries
- Worldbuilding Knowledge Base
- Retrieval Augmented Generation

## Phase 10 — Customization and Fine-Tuning
- Prompting vs. RAG vs. Fine-Tuning
- Preparing Training Examples
- LoRA and QLoRA Fundamentals
- Evaluation and Overfitting

## Phase 11 — General-Purpose AI Assistant
- Multiple Task Profiles
- Document Q&A and Code Assistance
- Controlled Local Tools
- Permissions and Safety

## Phase 12 — Optimization and Final Deployment
- Performance and Concurrency
- Storage and Backup
- Privacy and Network Security
- Testing and Maintenance

All detailed lessons, labs, and checkpoints will be
expanded progressively as the project develops.

---

# 5. Project Architecture

Current and planned file structure:

mini-memory/
|
|-- app.py
|-- index.html
|-- roadmap.html
|-- README.md
|-- requirements.txt           [Verify]
|-- .gitignore                 [Verify]
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
|-- templates/                 [Planned]
|-- instance/                  [Planned database location]

## File Responsibilities

- app.py: Flask backend and HTTP routes
- index.html: Main dashboard
- roadmap.html: Learning roadmap interface
- style.css: Website styling
- progress.js: Original Phase 1 progress tracking
- roadmap-data.js: Canonical AI phases and modules
- roadmap.js: Expandable roadmap generation
- lesson-data.js: Nested Phase/Module/Lesson structure
- lessons.js: Lesson checkboxes and module calculations
- dashboard.js: Homepage progress statistics

---

# 6. Local Development

## Open the Project

Project location on the original home PC:

E:\Code Projects\mini-memory

## Activate Python Environment

PowerShell:

    .\.venv\Scripts\Activate.ps1

## Install Dependencies

    python -m pip install -r requirements.txt

If requirements.txt is unavailable, first install Flask:

    python -m pip install Flask

Then generate requirements.txt in the active environment:

    python -m pip freeze > requirements.txt

## Run Mini Memory

    python app.py

Open:

    http://127.0.0.1:5000

Health endpoint:

    http://127.0.0.1:5000/health

The Flask development server is for local development
only. It must not be publicly exposed.

## Git Workflow

    git status
    git add <specific-files>
    git commit -m "feat: describe the change"
    git push origin main

Before starting work on another machine:

    git pull origin main

Never commit passwords, credentials, private databases,
virtual environments, or private webnovel drafts.

---

# 7. Progress and Data Storage

## Current

Learning progress is stored using browser localStorage.

There are currently two separate tracking systems:

1. Original Phase 1 module-topic checkboxes.
2. Individual lesson/lab/checkpoint activity checkboxes.

The homepage calculates progress from the second system.

These systems have not yet been merged.

## Planned

SQLite will become the primary source of progress data.

The Flask backend will expose controlled API endpoints
that allow the website to read and update progress.

Before migration, existing localStorage data should
be backed up and migrated carefully.

A Git commit does not back up browser localStorage.

Phone and PC synchronization will require both devices
to communicate with the same running server.

---

# 8. Development Rules

1. Teach concepts before implementing them.
2. Provide code with explanations.
3. Keep changes small and testable.
4. Specify exact files to create or modify.
5. Review the repository before changing existing code.
6. Never assume unverified work is complete.
7. Avoid duplicating functionality between files.
8. Preserve stable lesson identifiers.
9. Do not silently change the original 12-phase roadmap.
10. Never delete saved progress without a migration plan.
11. Test locally before committing.
12. Review Git changes before pushing.

A lesson is complete only when its implementation is
tested and the developer understands the main concepts.

---

# 9. Known Limitations and Future Improvements

- The AI model is not yet integrated.
- SQLite is not yet implemented.
- Browser progress is not synchronized across devices.
- The complete lesson curriculum is not yet modeled.
- Overall 12-phase completion isn't fully calculated.
- Phone access is not yet configured.
- Login and access controls are not yet implemented.
- The current Flask setup is development-only.

---

# 10. AI Recovery and Continuation Prompt

Copy the prompt below into ChatGPT if the assistant loses
context, invents project details, changes lesson order,
or provides code inconsistent with the repository.

## BEGIN RECOVERY PROMPT

You are my senior software engineering mentor,
technical instructor, code reviewer, and project architect.

We are developing my project called Mini Memory,
previously called Localised AI Model for General Use.

My GitHub repository is:
https://github.com/earl2k22/mini-memory

The repository README.md is our source of truth for
the project goals, roadmap, development rules,
architecture, and documented progress.

IMPORTANT INSTRUCTIONS:

1. Inspect the actual repository files before suggesting
   modifications to existing code.

2. Never invent file contents, completed lessons,
   Git commits, software installations, or test results.

3. Separate verified implementation, my reported
   completion, and planned work.

4. Teach me step by step. I am learning programming,
   and I want to understand and implement the code myself.

5. Explain new concepts, functions, syntax, and the reason
   behind every major code change.

6. Give exact filenames and clear instructions about
   what to add, remove, or replace.

7. Avoid providing unnecessarily large blocks of code
   when smaller, understandable changes are sufficient.

8. Do not silently restructure the established roadmap.

9. Maintain the distinction between our two tracks:
   Website Development and Local AI Learning.

10. Preserve existing functionality, saved progress,
    and stable IDs whenever possible.

11. Do not automatically modify my GitHub repository.
    I want to implement, test, commit, and push the code.

12. When debugging, inspect actual errors and existing
    code before prescribing changes.

13. Never claim code works without testing or evidence.

14. After each lesson, give me practical tests,
    a mini challenge, and appropriate Git commands.

15. Explain how changes support our long-term goal:
    self-hosted AI running on my PC and accessible
    from my phone.

CURRENT PROJECT CONTEXT:

We have completed the initial frontend development
lessons covering HTML, CSS, JavaScript, Git, GitHub,
dashboard design, navigation, nested lesson data,
and browser-local progress tracking.

We have started Stage 3: Python and Flask.

The last reviewed backend file is app.py, which serves
the homepage, roadmap, and health endpoint.

requirements.txt and .gitignore still need verification
in the repository.

Our next planned lesson is:

Stage 3, Lesson 3.2 — Flask Templates and Routing.

Before proceeding:

- Read the latest README.md.
- Inspect relevant current source files.
- Identify the last verified checkpoint.
- State what is complete, incomplete, and uncertain.
- Continue with the next appropriate lesson.
- Ask for missing local-only information only when
  it is essential to proceed safely.

Do not restart the entire project or invent a new
curriculum.

## END RECOVERY PROMPT

---

# 11. Project Vision

Mini Memory will evolve through three major milestones:

### Milestone 1 — Personal Learning Platform

A responsive website that stores structured lessons,
activities, progress, and developer notes.

### Milestone 2 — Self-Hosted AI Server

A Python-based application running a local AI model,
accessible from the home PC and other authorized
devices on the local network.

### Milestone 3 — General-Purpose AI Workspace

A personal AI interface for webnovel polishing,
document analysis, technical support, and other tasks.

The goal is not only to complete the software.

The goal is to become capable of understanding,
maintaining, troubleshooting, and extending it.
