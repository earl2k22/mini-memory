
# Mini Memory
### A Local AI for Webnovel Polishing and Refinement

Mini Memory is my personal software engineering and artificial
intelligence learning project.

My goal is to **learn programming and AI development by
building my own locally hosted AI assistant that can polish,
refine, and improve webnovel chapters**.

I want to understand how the entire application works,
write the code myself, troubleshoot problems, and gradually
become capable of independently developing and maintaining
my own AI system.

The learning dashboard, progress tracker, Flask backend,
and SQLite database are supporting components of this goal.

> **Project Philosophy:** Build it. Understand it.
> Test it. Improve it.

---

## Project Information

| Information | Details |
|---|---|
| Project | Mini Memory |
| Developer | earl2k22 |
| Repository | [mini-memory](https://github.com/earl2k22/mini-memory) |
| Status | Active Development |
| Current Stage | Stage 3 — Python Backend and Database |
| Current Checkpoint | Lesson 3.4 — Flask API Fundamentals |
| Next Lesson | Lesson 3.5 — JavaScript Fetch API |
| Primary Goal | Local AI for Webnovel Polishing |

**Progress Note:** Lesson 3.4 API code is present in the
repository. Local testing and persistence verification
must be completed before proceeding.

---

## 1. What Is Mini Memory?

Mini Memory is a self-hosted application that I am
developing to learn software engineering and build
a practical local AI system.

The project has two connected objectives:

### Learning Software Development

Learn how to build modern applications using:

- HTML, CSS, and JavaScript
- Python and Flask
- SQLite databases
- HTTP and REST APIs
- Git and GitHub
- Local AI models and inference
- Application architecture and debugging

### Building a Local Webnovel Polishing AI

Develop an AI-powered application capable of:

- Correcting grammar and awkward phrasing.
- Improving sentence structure and readability.
- Refining translated webnovel prose.
- Preserving the original plot and narrative meaning.
- Maintaining character names and terminology.
- Avoiding invented content and accidental omissions.
- Handling long chapters while preserving continuity.
- Comparing original and refined text.
- Exporting polished chapters.
- Operating locally on my personal computer.

**The webnovel polishing AI is the core product.**
The learning management features exist to support
my development journey.

---

## 2. Project Goals

### Primary Goals

1. Learn programming by personally building Mini Memory.
2. Create a capable local AI webnovel polishing assistant.
3. Run the AI model on my own Windows PC.
4. Build a reliable web-based refinement interface.
5. Preserve story meaning, tone, and important details.
6. Process long webnovel chapters effectively.
7. Develop character and terminology memory.
8. Access the application from authorized devices,
   including my phone.

### Long-Term Goals

After the webnovel polishing application is functional:

- Improve model performance and efficiency.
- Explore retrieval-augmented generation (RAG).
- Investigate optional local model customization.
- Improve deployment, privacy, and security.
- Expand Mini Memory into a general-purpose AI assistant.

---

## 3. Technology Stack

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Python, Flask |
| Templates | Jinja |
| Database | SQLite |
| API | HTTP, JSON, REST |
| AI Runtime | Ollama (planned) |
| AI Models | Local LLMs (to be evaluated) |
| Version Control | Git and GitHub |
| Development | Visual Studio Code |
| Operating System | Windows |

The AI model has not yet been selected or integrated.

---

## 4. Documentation

Detailed project information is organized inside
the [`docs/`](docs/) directory.

### Development and Learning

| Document | Description |
|---|---|
| [Development Roadmap](docs/DEVELOPMENT_ROADMAP.md) | Programming stages, modules, lessons, practical tasks, and checkpoints |
| [AI Learning Roadmap](docs/AI_LEARNING_ROADMAP.md) | Established 12-phase local AI learning curriculum |
| [Development Guide](docs/DEVELOPMENT_GUIDE.md) | Environment setup, commands, testing, Git workflow, and coding conventions |

### Project and Technical Documentation

| Document | Description |
|---|---|
| [Webnovel AI](docs/WEBNOVEL_AI.md) | Core product vision, polishing rules, requirements, and milestones |
| [Architecture](docs/ARCHITECTURE.md) | Technology stack, project structure, Flask routes, database, and APIs |

### Continuity and AI Mentorship

| Document | Description |
|---|---|
| [AI Context](docs/AI_CONTEXT.md) | AI recovery prompt, teaching instructions, and project rules |
| [Session Log](docs/SESSION_LOG.md) | Latest checkpoint, completed work, unresolved issues, and next lesson |

**Note:** These documentation links will become active
as the corresponding Markdown files are created.

---

## 5. Current Development Progress

### Stage 1 — Website Foundations

**Completed**

Git, GitHub, HTML, CSS, dashboard design,
and website navigation.

### Stage 2 — JavaScript and Progress Tracking

**Completed**

JavaScript fundamentals, localStorage, dynamic
roadmap generation, nested lesson data, completion
tracking, and dashboard progress calculations.

### Stage 3 — Python Backend and Database

**In Progress**

Completed implementations include:

- Python Flask application.
- Jinja templates and shared layouts.
- SQLite database initialization.
- Lessons and lesson progress tables.
- GET lesson progress API.
- PUT lesson progress API.
- JSON request validation.

Remaining work includes:

- Verifying Lesson 3.4 API tests.
- Connecting JavaScript to Flask.
- Migrating browser progress to SQLite.
- Registering the full lesson catalog.
- Implementing secure access from other devices.

For detailed progress, see
[Development Roadmap](docs/DEVELOPMENT_ROADMAP.md).

---

## 6. Project Architecture

Mini Memory currently uses a browser frontend
connected to a Python Flask application.

The intended architecture is:

    Browser (PC / Phone)
             |
             | HTTP / JSON
             |
        Flask Backend
             |
        +----+----+
        |         |
      SQLite   Local AI
      Database   Model
                  |
                Ollama

**Current state:**

The Flask and SQLite foundations exist, but the
browser still tracks progress through localStorage.
The local AI integration has not yet been implemented.

For the full architecture, see
[Architecture](docs/ARCHITECTURE.md).

---

## 7. Running Mini Memory Locally

### Requirements

- Windows PC
- Python
- Flask
- Git
- Visual Studio Code

### Open the Project

    cd "E:\Code Projects\mini-memory"

### Activate the Virtual Environment

    .\.venv\Scripts\Activate.ps1

### Install Dependencies

If requirements.txt is available:

    python -m pip install -r requirements.txt

Otherwise, install Flask in the activated environment:

    python -m pip install Flask

### Initialize the Database

    python database.py

### Start Flask

    python app.py

### Open the Application

Dashboard:

    http://127.0.0.1:5000

Health Check:

    http://127.0.0.1:5000/health

**Security Notice:** Flask's debug server is for
local development only and must not be exposed
directly to the public internet.

For complete setup instructions, see
[Development Guide](docs/DEVELOPMENT_GUIDE.md).

---

## 8. Development Methodology

Mini Memory follows a structured learning approach:

    Phase
      |
      Module
        |
        Lesson
          |
          Practical Lab
            |
            Checkpoint
              |
              Git Commit

Each lesson should include:

1. Learning objectives.
2. Concept explanations.
3. Code examples.
4. Hands-on implementation.
5. Testing and troubleshooting.
6. A practical challenge.
7. A completion checkpoint.
8. Appropriate Git commands.

The developer should understand the code rather
than simply copy it.

The AI mentor assists with explanations,
architecture, debugging, and code review.

The developer remains responsible for implementation.

---

## 9. AI Assistance and Recovery

This project uses an AI assistant as a programming
mentor, not as a replacement for learning.

To prevent context loss, inconsistent instructions,
or accidental roadmap changes, the project maintains
a dedicated recovery document.

**[AI Context and Recovery Prompt](docs/AI_CONTEXT.md)**

When starting a new conversation, the AI assistant
should read the relevant project documentation,
inspect the current repository, and verify the
latest checkpoint before recommending code changes.

The assistant must always remember:

> Mini Memory exists so I can learn software
> engineering and build my own locally hosted
> AI that polishes and refines webnovels.

---

## 10. Next Development Session

**Current Checkpoint:** Stage 3, Lesson 3.4

**Status:** Flask GET/PUT progress API implemented;
local execution tests require verification.

### Next Steps

1. Verify GET and PUT API functionality.
2. Confirm HTTP 400 and 404 error handling.
3. Verify SQLite progress persists after restarting Flask.
4. Begin Lesson 3.5 — JavaScript Fetch API.
5. Connect the learning interface to the backend.

The latest session notes and continuation instructions
will be maintained in:

**[Session Log](docs/SESSION_LOG.md)**

---

## 11. Project Vision

Mini Memory will progress through three major milestones.

### Milestone 1 — Learning the Foundations

Build and understand the website, JavaScript
interactions, Python backend, APIs, and database.

### Milestone 2 — Local Webnovel Polishing AI

Install and evaluate local language models,
develop reliable webnovel polishing prompts,
handle long chapters, and build the editing interface.

### Milestone 3 — Optimization and Expansion

Improve performance, introduce continuity memory,
enable authorized phone access, and optionally expand
into a general-purpose AI assistant.

---

## Final Principle

**The objective is not simply to finish an application.**

The objective is to become capable of understanding,
building, debugging, maintaining, and improving
my own software and local AI system.

Mini Memory is my journey from learning to code
to building an AI application that I can genuinely
call my own.
