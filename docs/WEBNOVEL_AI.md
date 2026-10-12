
# Mini Memory — Webnovel Polishing AI

## Core Product Requirements and Development Specification

**Project:** Mini Memory  
**Component:** Local Webnovel Polishing and Refinement AI  
**Status:** Planning and Technical Foundations  
**Primary Platform:** Windows PC  
**AI Runtime:** To be selected and benchmarked  
**AI Model:** To be selected  
**Backend:** Python and Flask  
**Frontend:** HTML, CSS, and JavaScript  

---

# 1. Product Vision

Mini Memory is a locally hosted AI application designed
to polish, refine, and improve webnovel chapters while
preserving the original story.

The application is being developed as both:

1. A practical AI-powered webnovel editing tool.
2. A personal software engineering and AI learning project.

The developer wants to understand and personally implement
the technologies used to build the application.

The final system should run primarily on the developer's
own computer, reducing dependence on cloud AI services.

## Primary Objective

Transform rough, awkward, poorly translated, or
grammatically incorrect webnovel prose into clearer,
more natural, and more readable English.

The refinement process must preserve the content and
meaning of the original chapter.

**The objective is refinement, not creative rewriting.**

---

# 2. Core Editing Principles

The AI must follow five fundamental principles.

## 2.1 Preserve Meaning

Do not change the meaning of the original text.

Preserve:

- Story events.
- Character actions.
- Dialogue intent.
- Character motivations explicitly established in the text.
- Relationships between characters.
- Important descriptions.
- Relevant plot details.
- Cause-and-effect relationships.

## 2.2 Improve Language Quality

The AI should improve:

- Grammar.
- Punctuation.
- Sentence structure.
- Word choice.
- Readability.
- Fluency.
- Awkward translations.
- Repetitive or unnatural phrasing.

Improvements should make the chapter more enjoyable
to read without changing its narrative content.

## 2.3 Preserve Story Continuity

The AI must preserve:

- Character names and identities.
- Character titles.
- Locations.
- Techniques and abilities.
- Cultivation ranks or progression systems.
- Items and artifacts.
- Organizations and factions.
- Worldbuilding terminology.
- Established character relationships.

Names and specialized terms should remain consistent
across paragraphs and chapters.

## 2.4 Prevent Hallucinations

The AI must not introduce unsupported material.

Examples of prohibited changes:

- Inventing new dialogue.
- Adding events not present in the chapter.
- Creating new character motivations.
- Introducing unsupported descriptions.
- Changing the outcome of an event.
- Inventing techniques, items, or locations.
- Resolving ambiguities through unsupported assumptions.

When the original passage is ambiguous, the AI should
preserve that ambiguity or flag it for review rather
than inventing missing information.

## 2.5 Prevent Omissions

The AI must not silently remove substantive content.

It should preserve:

- All important paragraphs.
- Dialogue exchanges.
- Character actions.
- Relevant descriptions.
- Plot developments.
- Internal thoughts.
- Narrative transitions.

The application should eventually include automated
checks to identify possible omissions and duplication.

---

# 3. Intended Users and Usage

## Primary User

The developer and owner of Mini Memory.

## Primary Use Case

Refining English-language webnovel chapters, including
translated fiction with awkward grammar or prose.

Genres may include:

- Xianxia and cultivation novels.
- Xuanhuan.
- Fantasy.
- Science fiction.
- Action and adventure.
- Progression fantasy.
- Other serialized webnovels.

The application should not depend on a particular genre.

## Typical Workflow

1. Open Mini Memory in a browser.
2. Paste or upload a chapter.
3. Select an editing profile.
4. Review the selected settings.
5. Start local AI refinement.
6. Receive the polished chapter.
7. Compare original and refined text.
8. Review or manually correct the result.
9. Export or copy the refined chapter.

---

# 4. Minimum Viable Product (MVP)

The first usable version should focus on performing
one job reliably:

**Refine a chapter using a local language model.**

## Required MVP Features

- [ ] Local AI model installed and operational.
- [ ] Python backend connected to local AI inference.
- [ ] Chapter text input interface.
- [ ] Basic polishing instructions.
- [ ] Refinement request endpoint.
- [ ] Output display.
- [ ] Copy refined text.
- [ ] Basic error handling.
- [ ] Basic fidelity testing.

## Desirable MVP Features

- [ ] Original-versus-refined comparison.
- [ ] Configurable polishing strength.
- [ ] Simple chapter export.
- [ ] Processing status indicator.
- [ ] Basic terminology protection.

## Deferred Features

The following are not essential for the first prototype:

- Multi-user accounts.
- Advanced RAG.
- Fine-tuning.
- Large-scale batch processing.
- Complex revision history.
- Cloud deployment.
- General-purpose AI agent tools.

These can be considered after the core workflow works.

---

# 5. Refinement Profiles

The application should eventually support different
editing strengths.

## 5.1 Light Polish

**Purpose:** Correct language errors while making
minimal stylistic changes.

Allowed changes:

- Grammar corrections.
- Punctuation corrections.
- Minor word choice improvements.
- Small readability improvements.

Avoid:

- Major sentence restructuring.
- Unnecessary paraphrasing.
- Style changes.
- Added descriptions.

## 5.2 Balanced Polish

**Purpose:** Improve naturalness, fluency, and
readability while preserving narrative meaning.

Allowed changes:

- Grammar and punctuation fixes.
- Rephrasing awkward sentences.
- Improving transitions.
- Reducing unnecessary repetition.
- Improving dialogue readability.

Avoid:

- Altering plot.
- Rewriting character personalities.
- Inventing dialogue.
- Removing narrative details.
- Changing established terminology.

**Planned default profile:** Balanced Polish.

This is a design preference, not yet a tested setting.

## 5.3 Intensive Polish

**Purpose:** Improve very rough prose that requires
significant sentence-level restructuring.

Allowed changes:

- Reorganizing awkward sentences.
- Improving paragraph flow.
- Correcting unnatural translations.
- Improving clarity and fluency.

Still prohibited:

- Inventing content.
- Omitting important details.
- Changing story events.
- Changing dialogue meaning.
- Replacing established lore.

Intensive polishing must still preserve content fidelity.

---

# 6. Input Requirements

## 6.1 Initial Input

The MVP should support pasted plain text.

## 6.2 Future File Support

Potential supported formats:

- .txt
- .md
- .docx, if needed later

File support must be implemented and tested rather
than assumed.

## 6.3 Input Validation

The application should:

- Reject empty submissions.
- Apply reasonable input size limits.
- Preserve paragraph boundaries.
- Handle common Unicode characters.
- Avoid corrupting quotation marks and punctuation.
- Report unsupported file types.
- Avoid executing uploaded content.

## 6.4 Privacy

Uploaded or pasted chapters should remain local
unless the user explicitly enables another service.

Original chapters and refinement outputs should not
be automatically published to GitHub.

---

# 7. Output Requirements

The polished output should:

- Be complete and readable.
- Preserve paragraph order when appropriate.
- Preserve the chapter's meaning.
- Preserve dialogue and character relationships.
- Preserve specialized names and terminology.
- Avoid unnecessary commentary inside the refined text.
- Avoid unexpected summaries or explanations.
- Be easy to copy, review, and export.

## Future Output Options

- Copy to clipboard.
- Download as .txt.
- Download as .md.
- Side-by-side comparison.
- Highlighted differences.
- Editable final result.

---

# 8. Local AI Architecture

The planned processing flow is:

    User Browser
         |
         | Submit Chapter
         v
    Flask Application
         |
         | Validate and Prepare Input
         v
    Refinement Pipeline
         |
         | Construct Prompt
         | Apply Editing Rules
         | Add Relevant Context
         v
    Local AI Runtime
         |
         | Model Inference
         v
    Generated Refinement
         |
         | Validate Output
         | Check Completeness
         v
    Flask Application
         |
         | Return Refined Chapter
         v
    Browser Review Interface

The initial AI runtime may be Ollama, but the final
choice will depend on hardware and model testing.

The system should be designed so the AI model can
be replaced without rewriting the entire website.

---

# 9. AI Model Selection

The model must be evaluated for its ability to
refine prose faithfully.

## Selection Criteria

1. Quality of English writing improvement.
2. Preservation of original meaning.
3. Resistance to invented details.
4. Completeness of output.
5. Consistency with names and terminology.
6. Ability to process realistic chapter lengths.
7. Compatibility with available PC hardware.
8. Inference speed.
9. Memory requirements.
10. Model licensing and permitted use.

## Evaluation Approach

Test candidate models against the same representative
webnovel passages and chapters.

Do not assume the largest model is automatically
the best choice.

## Current Status

- [ ] PC hardware formally assessed for local AI.
- [ ] Runtime selected.
- [ ] Candidate models shortlisted.
- [ ] Candidate models downloaded.
- [ ] Benchmark tests performed.
- [ ] Default model selected.

---

# 10. Prompt Engineering Requirements

The AI must receive clear instructions describing
its role and limitations.

## Required Prompt Elements

- Editing objective.
- Refinement strength.
- Meaning preservation.
- Name and terminology preservation.
- Prohibition against unsupported additions.
- Prohibition against substantive omissions.
- Output formatting rules.
- Optional glossary information.

## Initial Prompt Concept

The following is a preliminary design, not a
benchmarked production prompt.

### System Instruction

You are a professional English-language webnovel
editor specializing in improving rough or awkward
translated prose.

Your task is to correct grammar, punctuation,
sentence structure, readability, and fluency.

Preserve the original plot, meaning, dialogue intent,
character identities, terminology, worldbuilding,
and narrative tone.

Do not invent new content, add unsupported details,
omit substantive information, or summarize the chapter.

Return the refined prose without unnecessary
introductions, explanations, or commentary.

### User Instruction

Refine the following webnovel passage using the
selected editing profile.

Preserve all story information and maintain
consistent terminology.

[WEBNOVEL TEXT]

## Prompt Evaluation

The prompt must be tested using real examples.

A good prompt should improve writing quality
without introducing unacceptable content changes.

---

# 11. Long-Chapter Processing

Many webnovel chapters may exceed a model's
comfortable context or output limits.

The application must eventually support processing
long chapters in manageable sections.

## 11.1 Token Budgeting

The system should account for:

- System instructions.
- Refinement rules.
- Glossary and continuity context.
- Original chapter text.
- Generated output tokens.

## 11.2 Intelligent Chunking

Text should be divided at appropriate boundaries.

Preferred boundaries include:

- Paragraph breaks.
- Scene transitions.
- Natural narrative sections.

Avoid splitting in the middle of dialogue or
important narrative sequences when possible.

## 11.3 Context Preservation

Adjacent chunks may need relevant context to
maintain continuity.

However, overlapping source text must not result
in duplicated refined output.

## 11.4 Chapter Reassembly

After processing, the system should:

- Combine chunks in the correct order.
- Preserve important paragraph structure.
- Identify possible missing sections.
- Identify duplicated sections.
- Verify the beginning and ending of the chapter.
- Review consistency across chunk boundaries.

## 11.5 Long-Chapter Checkpoint

A complete chapter should be processed without
unacceptable omissions, duplication, or invented
material.

---

# 12. Character and Terminology Memory

A future major feature is persistent context
for serialized webnovels.

## Character Glossary

Possible fields:

- Character name.
- Alternate names.
- Titles.
- Pronouns.
- Affiliation.
- Relevant description.

## Terminology Glossary

Possible fields:

- Technique name.
- Item name.
- Cultivation rank.
- Organization.
- Location.
- Preferred translation.
- Alternate spelling.

## Worldbuilding Reference

Possible information:

- Cultivation systems.
- Power progression.
- Important locations.
- Established rules.
- Factions.
- Recurring objects.

## Retrieval-Augmented Generation

RAG may be used to retrieve relevant information
before refinement.

The initial glossary can be built with simpler
structured data before advanced vector retrieval.

A vector database is not automatically required
for the first implementation.

---

# 13. Quality Assurance

Webnovel polishing quality must be measured.

## 13.1 Language Quality

Evaluate:

- Grammar.
- Readability.
- Sentence flow.
- Natural phrasing.
- Punctuation.

## 13.2 Content Fidelity

Evaluate:

- Plot preservation.
- Meaning preservation.
- Dialogue preservation.
- Character consistency.
- Absence of invented content.
- Absence of substantive omissions.

## 13.3 Terminology Consistency

Evaluate:

- Character names.
- Pronouns.
- Cultivation ranks.
- Ability names.
- Items.
- Locations.
- Organizations.

## 13.4 Technical Reliability

Evaluate:

- Processing failures.
- Timeouts.
- Truncated outputs.
- Input encoding.
- Long-chapter handling.
- Processing performance.

## 13.5 Human Review

AI output should remain reviewable.

Automated validation can help identify possible
errors but cannot guarantee that a chapter has
preserved every nuance.

---

# 14. Proposed Evaluation Rubric

Each test chapter can be assessed using a five-point
scale for the following categories.

| Category | Score Range | Description |
|---|---|---|
| Grammar | 1–5 | Correctness of language |
| Fluency | 1–5 | Natural reading flow |
| Readability | 1–5 | Clarity of prose |
| Meaning Preservation | 1–5 | Faithfulness to source |
| Terminology Consistency | 1–5 | Preservation of names and terms |
| Completeness | 1–5 | Retention of substantive content |

Scores alone should not hide critical failures.

A chapter with excellent grammar but major invented
events or missing scenes should not pass evaluation.

## Critical Failure Conditions

- Major plot alteration.
- Significant omitted content.
- Invented important dialogue or events.
- Incorrect character identity.
- Corrupted key terminology.
- Severely truncated output.

The rubric and thresholds will be refined after
initial benchmarking.

---

# 15. Webnovel AI Development Milestones

## Milestone 1 — Local Model Foundations

- [ ] Complete hardware assessment.
- [ ] Select a local AI runtime.
- [ ] Download a candidate model.
- [ ] Run the first inference.
- [ ] Benchmark speed and memory.

## Milestone 2 — Prompt-Based Refinement

- [ ] Create initial polishing prompts.
- [ ] Define editing strength profiles.
- [ ] Test sample passages.
- [ ] Compare original and refined outputs.
- [ ] Evaluate preservation of meaning.

## Milestone 3 — Python AI Integration

- [ ] Connect Python to the local AI runtime.
- [ ] Create a refinement function.
- [ ] Handle inference errors.
- [ ] Add request timeouts.
- [ ] Return refined text through Flask.

## Milestone 4 — Webnovel Polishing Interface

- [ ] Create chapter input controls.
- [ ] Add a refine button.
- [ ] Display generated output.
- [ ] Implement copying or export.
- [ ] Show useful processing feedback.

## Milestone 5 — Long-Chapter Reliability

- [ ] Implement chunking.
- [ ] Preserve context across chunks.
- [ ] Combine results.
- [ ] Check for omissions.
- [ ] Detect duplicated content.

## Milestone 6 — Consistency and Memory

- [ ] Build a character glossary.
- [ ] Build a terminology glossary.
- [ ] Preserve worldbuilding information.
- [ ] Experiment with RAG if beneficial.
- [ ] Evaluate cross-chapter consistency.

## Milestone 7 — Optimization and Deployment

- [ ] Improve inference performance.
- [ ] Protect private source material.
- [ ] Implement suitable authentication.
- [ ] Configure safe LAN access.
- [ ] Test authorized phone access.
- [ ] Add backup and recovery procedures.

---

# 16. Minimum Viable Product Acceptance Criteria

The first useful Mini Memory polishing prototype
should satisfy the following criteria:

- [ ] Runs a language model locally.
- [ ] Accepts a webnovel passage or chapter.
- [ ] Sends the input to the local model.
- [ ] Produces refined English prose.
- [ ] Preserves essential story information.
- [ ] Avoids obvious unsupported additions.
- [ ] Avoids significant content loss.
- [ ] Displays the result clearly.
- [ ] Allows the user to copy the output.
- [ ] Handles common failures without crashing.
- [ ] Passes representative manual quality tests.

Advanced AI memory, fine-tuning, and general-purpose
assistant functionality are not required for the MVP.

---

# 17. Product Development Rules

1. Prioritize faithful refinement over creativity.
2. Prioritize content preservation over aggressive rewriting.
3. Select models based on measured results.
4. Test prompts before adopting them permanently.
5. Keep original chapters available during review.
6. Avoid irreversible changes to source material.
7. Treat input chapters as data, not executable instructions.
8. Do not silently send chapter content to cloud services.
9. Protect private local files.
10. Design the editing pipeline to support different models.
11. Introduce complex technology only when justified.
12. Maintain the core webnovel polishing objective.
13. Keep learning and understanding the implementation.
14. Avoid claiming that AI output is perfectly faithful
    without evaluation.

---

# 18. Current Product Status

## Implemented Foundations

The broader Mini Memory project currently includes:

- Frontend website.
- Learning dashboard.
- Structured lesson data.
- Flask backend.
- SQLite database foundation.
- Initial lesson progress API.

## Not Yet Implemented

- Local LLM inference.
- AI runtime integration.
- Webnovel chapter submission.
- AI polishing endpoints.
- Refinement profiles.
- Long-chapter processing.
- Chapter comparison.
- File export.
- Character and terminology memory.

**Current Development Checkpoint:**
Stage 3, Lesson 3.4 — Flask API Fundamentals.

The next programming lesson is Lesson 3.5,
JavaScript Fetch API and Frontend Integration,
after verifying the previous lesson's API tests.

---

# 19. Related Documentation

- [Project README](../README.md)
- [Development Roadmap](DEVELOPMENT_ROADMAP.md)
- [AI Learning Roadmap](AI_LEARNING_ROADMAP.md)
- [Architecture](ARCHITECTURE.md)
- [Development Guide](DEVELOPMENT_GUIDE.md)
- [AI Context](AI_CONTEXT.md)
- [Session Log](SESSION_LOG.md)

---

# Final Product Principle

**Mini Memory must make webnovel chapters better
to read without changing the story they tell.**

The purpose of developing the system is twofold:

1. Create a practical and reliable local AI editor.
2. Learn enough software engineering and AI development
   to understand and maintain the entire application.

The project's success depends on both the quality
of its webnovel refinement and the knowledge gained
while building it.
