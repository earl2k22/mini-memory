
# Mini Memory — Development Roadmap

## Programming and Software Engineering Curriculum

This document is the official development roadmap
for Mini Memory.

It tracks the technical skills, programming lessons,
practical exercises, and development milestones
required to build the application.

**Project Repository:**
https://github.com/earl2k22/mini-memory

**Primary Objective:**
Learn programming and software engineering by building
a locally hosted AI that can polish and refine webnovels.

**Current Stage:** Stage 3 — Python Backend and Database

**Current Checkpoint:** Lesson 3.4 — Flask API Fundamentals

**Next Lesson:** Lesson 3.5 — JavaScript Fetch API

---

# 1. Learning Methodology

Mini Memory follows a structured learning system:

    Stage
      |
      Module
        |
        Lesson
          |
          Practical Lab
            |
            Tasks
              |
              Checkpoint
                |
                Git Commit

## Completion Status

- [x] Implemented or completed
- [ ] Pending, incomplete, or not yet verified

A feature being present in GitHub does not automatically
prove that it has passed local execution tests.

## Lesson Requirements

Each lesson should provide:

1. Learning objectives.
2. Concept explanations.
3. Examples of important syntax.
4. Hands-on programming exercises.
5. Testing and debugging guidance.
6. A practical mini challenge.
7. A completion checkpoint.
8. Git commands when applicable.

The developer should understand and implement the
code personally.

---

# 2. Stage 1 — Website Foundations

**Status: Completed**

**Learning Goal:**
Understand version control and build a functional
website using HTML and CSS.

## Module 1 — Git and GitHub Fundamentals

### Lesson 1.1 — Version Control

**Topics:**
- Git repositories
- Commits
- Local and remote repositories
- GitHub
- Basic Git commands

**Tasks:**

- [x] Create the Mini Memory repository.
- [x] Create README.md.
- [x] Understand git status.
- [x] Understand git add.
- [x] Understand git commit.
- [x] Push code to GitHub.

**Practical Lab:**
Initialize and publish the Mini Memory project.

**Checkpoint:**
The project repository exists and can be updated
through Git.

## Module 2 — HTML Foundations

### Lesson 1.2 — HTML Website Structure

**Topics:**
- HTML document structure
- HTML elements
- Semantic sections
- Navigation links
- IDs and classes

**Tasks:**

- [x] Create index.html.
- [x] Create the document head and body.
- [x] Add headings and paragraphs.
- [x] Create the initial dashboard.
- [x] Understand semantic HTML elements.

**Practical Lab:**
Build the first Mini Memory dashboard.

**Checkpoint:**
The browser displays the homepage.

## Module 3 — CSS Foundations

### Lesson 1.3 — CSS Styling

**Topics:**
- CSS selectors
- CSS properties
- Colors
- Spacing
- Typography
- External stylesheets

**Tasks:**

- [x] Create static/css/style.css.
- [x] Connect CSS to HTML.
- [x] Design the dark theme.
- [x] Style buttons and navigation.
- [x] Understand classes and selectors.

**Practical Lab:**
Apply consistent styling to the homepage.

**Checkpoint:**
The website uses its custom CSS theme.

## Module 4 — CSS Layouts

### Lesson 1.4 — CSS Grid and Dashboard Design

**Topics:**
- CSS Grid
- Containers
- Responsive layouts
- Dashboard cards
- Progress bars

**Tasks:**

- [x] Create dashboard cards.
- [x] Implement a dashboard grid.
- [x] Create reusable card styling.
- [x] Style progress indicators.

**Practical Lab:**
Build the Mini Memory feature dashboard.

**Checkpoint:**
The dashboard displays its main project sections.

## Module 5 — Website Navigation

### Lesson 1.5 — Multiple Pages and Navigation

**Topics:**
- HTML links
- Navigation bars
- Multiple-page websites
- Active navigation states

**Tasks:**

- [x] Create the roadmap page.
- [x] Add dashboard navigation.
- [x] Add roadmap navigation.
- [x] Connect the pages.
- [x] Indicate the active page.

**Practical Lab:**
Navigate between the homepage and roadmap.

**Checkpoint:**
Both pages are accessible through navigation.

---

# 3. Stage 2 — JavaScript and Interactive Tracking

**Status: Completed**

**Learning Goal:**
Learn JavaScript fundamentals and create a dynamic
learning roadmap with persistent browser progress.

## Module 1 — JavaScript Fundamentals

### Lesson 2.1 — First JavaScript Interactions

**Topics:**
- Variables
- Functions
- DOM selection
- Event listeners
- Browser storage

**Tasks:**

- [x] Create progress.js.
- [x] Select HTML elements with JavaScript.
- [x] Implement the first completion interaction.
- [x] Introduce localStorage.

**Checkpoint:**
JavaScript responds to user actions.

## Module 2 — Independent Progress Tracking

### Lesson 2.2 — Checkboxes and Completion Percentages

**Topics:**
- Arrays and collections
- forEach()
- Event handling
- Percentage calculation
- localStorage

**Tasks:**

- [x] Create independent completion checkboxes.
- [x] Count completed activities.
- [x] Calculate completion percentages.
- [x] Update progress bars.
- [x] Persist checkbox states across refreshes.

**Practical Lab:**
Track Phase 1 module-topic completion.

**Checkpoint:**
Checkbox progress updates independently and persists.

## Module 3 — Data-Driven Interfaces

### Lesson 2.3 — JavaScript Objects and Arrays

**Topics:**
- Arrays
- Objects
- Object properties
- Dynamic DOM creation
- Iteration

**Tasks:**

- [x] Create roadmap-data.js.
- [x] Define the canonical 12-phase AI roadmap.
- [x] Store module titles in arrays.
- [x] Create phase cards dynamically.

**Checkpoint:**
The website generates roadmap cards using structured data.

## Module 4 — Interactive Roadmap Cards

### Lesson 2.4 — Expandable Phase Cards

**Topics:**
- HTML details
- HTML summary
- Dynamic element creation
- JavaScript file responsibilities

**Tasks:**

- [x] Convert roadmap cards into expandable sections.
- [x] Keep progress logic separate from roadmap rendering.
- [x] Configure Phase 4 to open automatically.
- [x] Preserve the 12-phase roadmap.

**Checkpoint:**
Users can expand and collapse phase cards.

## Module 5 — Hierarchical Data Modeling

### Lesson 2.5 — Phase, Module, and Lesson Structure

**Topics:**
- Nested objects
- Nested arrays
- Stable identifiers
- Hierarchical data
- Data-driven rendering

**Tasks:**

- [x] Create lesson-data.js.
- [x] Create lessons.js.
- [x] Define Phase 1, Module 1 activities.
- [x] Add lesson, lab, and checkpoint types.
- [x] Render nested lesson data.

**Practical Lab:**
Display a structured lesson preview.

**Checkpoint:**
Phase, module, and lesson data render correctly.

## Module 6 — Dynamic Lesson Progress

### Lesson 2.6 — Individual Completion Tracking

**Topics:**
- Closures
- Nested functions
- Array filtering
- Conditional statements
- Dynamic checkboxes

**Tasks:**

- [x] Generate completion checkboxes.
- [x] Save individual lesson states.
- [x] Calculate module percentages.
- [x] Display "Module Completed!" at 100%.
- [x] Change completed progress bars to green.

**Practical Lab:**
Create an interactive module completion interface.

**Checkpoint:**
All completion states persist after refreshing.

## Module 7 — Unified Progress Dashboard

### Lesson 2.7 — Dashboard Calculations

**Topics:**
- Shared browser storage
- Aggregating completion data
- Returning objects from functions
- Dynamic dashboard indicators

**Tasks:**

- [x] Create dashboard.js.
- [x] Read lesson completion states.
- [x] Calculate tracked activity totals.
- [x] Calculate completed tracked modules.
- [x] Display progress on the homepage.

**Checkpoint:**
The dashboard displays progress from stored activity data.

**Important Limitation:**
Progress is still stored per browser and is not
synchronized across devices.

---

# 4. Stage 3 — Python Backend and Database

**Status: In Progress**

**Learning Goal:**
Learn Python web development, HTTP APIs, and databases
to support a locally hosted application.

## Module 1 — Backend Foundations

### Lesson 3.1 — Introduction to Python and Flask

**Topics:**
- Frontend vs backend
- Python environments
- Flask
- HTTP routes
- Server responses
- Localhost

**Tasks:**

- [x] Create app.py.
- [x] Introduce Flask application setup.
- [x] Create the homepage route.
- [x] Create the roadmap route.
- [x] Create the /health endpoint.
- [x] Set up the Python project environment.
- [ ] Verify requirements.txt is committed to GitHub.

**Practical Lab:**
Serve Mini Memory using Flask.

**Checkpoint:**
The backend application code and routes are present.

## Module 2 — Flask Templates

### Lesson 3.2 — Jinja Template Inheritance

**Topics:**
- render_template()
- Jinja
- Template blocks
- Template inheritance
- Flask url_for()
- Dynamic navigation states

**Tasks:**

- [x] Create templates/base.html.
- [x] Move the homepage into templates/.
- [x] Move the roadmap into templates/.
- [x] Implement shared headers and navigation.
- [x] Use Jinja template inheritance.
- [x] Preserve JavaScript and CSS integration.

**Practical Lab:**
Convert the website into a template-based Flask project.

**Checkpoint:**
Flask renders the dashboard and roadmap through Jinja.

## Module 3 — Database Fundamentals

### Lesson 3.3 — Introduction to SQLite

**Topics:**
- Relational databases
- Tables, rows, and columns
- Primary keys
- Foreign keys
- SQL queries
- Database connections

**Tasks:**

- [x] Create database.py.
- [x] Create database_test.py.
- [x] Define the lessons table.
- [x] Define the lesson_progress table.
- [x] Enable foreign key enforcement.
- [x] Implement sample INSERT and SELECT queries.
- [x] Add .gitignore rules for local database files.
- [ ] Verify database creation and queries locally.

**Practical Lab:**
Initialize SQLite and insert the first lesson record.

**Checkpoint:**
Database implementation exists; local execution
verification remains outstanding.

## Module 4 — Flask API Fundamentals

### Lesson 3.4 — SQLite Progress API

**Topics:**
- REST APIs
- HTTP GET
- HTTP PUT
- JSON requests
- Input validation
- SQLite UPSERT
- HTTP status codes

**Tasks:**

- [x] Import SQLite functions into app.py.
- [x] Initialize the database.
- [x] Register the first known lesson.
- [x] Implement GET /api/progress/<lesson_id>.
- [x] Implement PUT /api/progress/<lesson_id>.
- [x] Validate Boolean completion values.
- [x] Handle unknown lesson IDs.
- [x] Store completion timestamps.
- [x] Use parameterized SQL queries.

**Tests still to verify:**

- [ ] GET returns the saved lesson status.
- [ ] PUT saves true and false correctly.
- [ ] Unknown lessons return HTTP 404.
- [ ] Invalid values return HTTP 400.
- [ ] Completion survives a Flask restart.
- [ ] Existing pages still function.

**Practical Lab:**
Read and update lesson completion using PowerShell
HTTP requests.

**Checkpoint:**
API code implemented in the repository.
Local tests have not been independently confirmed.

## Module 5 — Browser and Database Integration

### Lesson 3.5 — JavaScript Fetch API

**Status: Next Lesson**

**Learning Objectives:**
- Understand asynchronous requests.
- Use fetch() to communicate with Flask.
- Handle JSON responses.
- Handle API errors.
- Connect lesson checkboxes to SQLite.

**Tasks:**

- [ ] Register the full lesson catalog in SQLite.
- [ ] Implement frontend GET requests.
- [ ] Implement frontend PUT requests.
- [ ] Handle unsuccessful API responses.
- [ ] Preserve browser data during migration.
- [ ] Replace localStorage as primary progress storage.
- [ ] Update the dashboard from server data.
- [ ] Test progress persistence.

**Practical Lab:**
Connect the learning interface to Flask and SQLite.

**Checkpoint:**
The browser reads and writes progress through the backend.

## Module 6 — Local Network Access

### Lesson 3.6 — Accessing Mini Memory from a Phone

**Learning Objectives:**
- Understand LAN communication.
- Understand private IP addresses.
- Understand server ports.
- Learn basic application security.

**Tasks:**

- [ ] Identify the home PC's LAN address.
- [ ] Understand safe binding and network exposure.
- [ ] Configure a suitable local application server.
- [ ] Introduce access control.
- [ ] Test authenticated access from a phone.
- [ ] Verify local network functionality.

**Checkpoint:**
Authorized devices can access Mini Memory safely.

---

# 5. Future Development Stages

The following stages are planned. Their detailed lessons
will be developed progressively rather than inventing
a complete curriculum before implementation.

These stages are separate from the canonical 12-phase
AI learning curriculum.

## Stage 4 — Local AI Hardware and Environment

**Goal:**
Prepare the home PC to run language models locally.

**Planned Modules:**
- Hardware Assessment
- AI Runtime Installation
- Language Model Selection
- Model Benchmarking
- First Local Inference

**Tasks:**

- [ ] Examine current CPU, RAM, GPU, and VRAM.
- [ ] Determine suitable model sizes.
- [ ] Install and configure a local AI runtime.
- [ ] Download appropriate language models.
- [ ] Benchmark model speed and memory usage.
- [ ] Test local inference.

## Stage 5 — Webnovel Polishing Engine

**Goal:**
Build the core AI functionality for refining chapters.

**Planned Modules:**
- Prompt Engineering
- Faithful Text Refinement
- Long-Chapter Processing
- Quality Evaluation
- Local AI API Integration

**Tasks:**

- [ ] Design webnovel polishing prompts.
- [ ] Preserve plot, character identity, and terminology.
- [ ] Refine sample chapters.
- [ ] Detect omissions and invented content.
- [ ] Implement text chunking.
- [ ] Reassemble complete chapters.
- [ ] Compare original and refined output.
- [ ] Evaluate quality against test examples.

## Stage 6 — Webnovel Editing Application

**Goal:**
Build a usable web interface for the polishing engine.

**Planned Modules:**
- Chapter Input
- AI Processing
- Side-by-Side Comparison
- Revision History
- Export and File Management

**Tasks:**

- [ ] Build chapter input controls.
- [ ] Connect the frontend to local AI inference.
- [ ] Display AI processing results.
- [ ] Add review and comparison features.
- [ ] Support export.
- [ ] Improve error handling.

## Stage 7 — Memory and Consistency

**Goal:**
Improve continuity and terminology preservation.

**Planned Modules:**
- Character Glossary
- Terminology Management
- Worldbuilding Reference Data
- RAG Fundamentals
- Context Retrieval

**Tasks:**

- [ ] Store important characters and names.
- [ ] Store location and technique terminology.
- [ ] Maintain worldbuilding details.
- [ ] Retrieve relevant context during polishing.
- [ ] Evaluate consistency across chapters.

## Stage 8 — Optimization and Secure Deployment

**Goal:**
Make Mini Memory reliable and suitable for ongoing use.

**Planned Modules:**
- Performance Optimization
- Storage and Backups
- Authentication and Security
- Device Access
- Maintenance and Testing

**Tasks:**

- [ ] Improve inference performance.
- [ ] Implement backup processes.
- [ ] Protect private data.
- [ ] Configure secure local access.
- [ ] Test long-running reliability.
- [ ] Validate end-to-end workflows.

---

# 6. Current Project Checkpoint

## Last Implemented Lesson

**Stage 3 — Lesson 3.4: Flask API Fundamentals**

Repository code currently includes:

- Flask web application.
- Jinja templates.
- SQLite database initialization.
- Lessons and lesson_progress tables.
- GET progress endpoint.
- PUT progress endpoint.
- Input validation.
- Completion timestamps.

## Outstanding Verification

Before moving forward:

- [ ] Confirm local GET request succeeds.
- [ ] Confirm local PUT request succeeds.
- [ ] Confirm invalid requests are rejected correctly.
- [ ] Confirm database persistence after restart.
- [ ] Confirm existing frontend pages still work.

## Next Lesson

**Lesson 3.5 — JavaScript Fetch API and Frontend Integration**

The next step will connect the existing browser interface
to Flask and SQLite.

We must preserve previously stored browser progress
during this transition.

---

# 7. Development Priorities

Development should support the following order:

1. Understand the software foundations.
2. Complete the essential backend infrastructure.
3. Establish reliable browser/server communication.
4. Assess hardware and run the first local AI model.
5. Build the webnovel polishing engine.
6. Create the complete editing interface.
7. Improve chapter consistency and long-text handling.
8. Optimize performance and security.
9. Expand into other AI capabilities if useful.

The learning dashboard is not the final product.

**The main objective is to learn programming by building
a local AI that faithfully polishes and refines webnovels.**

---

# 8. Completion and Documentation Rules

1. Update this roadmap after each verified lesson.
2. Do not mark a test complete without evidence.
3. Preserve established lesson numbers.
4. Keep the 12-phase AI curriculum in its own document.
5. Record outstanding work in SESSION_LOG.md.
6. Document architecture changes in ARCHITECTURE.md.
7. Follow the recovery rules in AI_CONTEXT.md.
8. Keep the webnovel polishing objective central.

---

# 9. Related Documents

- [Project README](../README.md)
- [AI Learning Roadmap](AI_LEARNING_ROADMAP.md)
- [Webnovel AI Requirements](WEBNOVEL_AI.md)
- [Architecture](ARCHITECTURE.md)
- [Development Guide](DEVELOPMENT_GUIDE.md)
- [AI Context and Recovery](AI_CONTEXT.md)
- [Session Log](SESSION_LOG.md)

Some linked documents will be created in subsequent
documentation sessions.
