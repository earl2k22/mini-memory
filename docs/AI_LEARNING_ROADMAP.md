
# Mini Memory — Local AI Learning Roadmap

## From AI Fundamentals to a Local Webnovel Polishing Assistant

This document contains the official 12-phase AI learning
curriculum for Mini Memory.

The goal is to understand local AI technologies and apply
that knowledge to building a reliable, private AI assistant
that polishes and refines webnovel chapters.

**Project:** Mini Memory  
**Repository:** https://github.com/earl2k22/mini-memory  
**Learning Track:** Local Artificial Intelligence  
**Status:** Curriculum Established — Practical AI Training Pending

---

# 1. Purpose of This Roadmap

I am learning artificial intelligence because I want
to personally build an AI application that can refine
and polish webnovel chapters on my own computer.

The application should:

- Improve grammar, fluency, clarity, and readability.
- Preserve the original story and authorial voice.
- Avoid hallucinated events, dialogue, and descriptions.
- Prevent accidental omissions.
- Maintain consistent names and terminology.
- Process long chapters without losing context.
- Use locally hosted language models.
- Support original-versus-refined comparisons.
- Eventually be accessible from my phone.

This is a practical learning roadmap.

The objective is not just to understand AI terminology,
but to develop the skills needed to build the application.

---

# 2. Learning Structure

Every phase follows this structure:

    Phase
      |
      Module
        |
        Lesson
          |
          Practical Lab
            |
            Checkpoint

## Learning Components

**Phase:** A major area of AI development.

**Module:** A focused topic within a phase.

**Lesson:** A concept or skill to learn.

**Practical Lab:** An exercise applying the knowledge.

**Checkpoint:** A task or assessment used to verify
understanding before advancing.

Detailed lesson numbering will be introduced
progressively when each module is taught.

## Completion Status

- [x] Completed and verified
- [ ] Pending or not yet verified

The existence of the AI learning dashboard does not
mean the corresponding AI lessons have been completed.

Completion must be based on actual learning and tests.

---

# 3. Phase 1 — Project Foundations

**Objective:** Understand the purpose, capabilities,
and limitations of local AI systems.

## Module 1.1 — LLM Basics and Terminology

**Learn:**
- What a Large Language Model is.
- How text generation works conceptually.
- What tokens and parameters are.
- The meaning of inference and training.
- What context windows are.

**Tasks:**

- [ ] Explain what an LLM does.
- [ ] Distinguish inference from training.
- [ ] Understand tokens and context limits.
- [ ] Explain why models can hallucinate.

**Practical Lab:**
Compare several AI responses to the same short
webnovel paragraph.

**Checkpoint:**
Explain why an LLM can improve prose but may
also alter or invent story details.

## Module 1.2 — Local AI Architecture

**Learn:**
- Local versus cloud AI.
- AI model runtimes.
- Basic client/server architecture.
- Model storage and inference.
- Privacy and offline operation.

**Tasks:**

- [ ] Explain local AI architecture.
- [ ] Identify the role of the model runtime.
- [ ] Understand where model weights are stored.
- [ ] Explain how Flask could communicate with a local LLM.

**Practical Lab:**
Draw the planned Mini Memory AI architecture.

**Checkpoint:**
Explain how a chapter travels from the browser
to the local AI model and back.

## Module 1.3 — Defining Project Goals

**Learn:**
- Defining functional requirements.
- Establishing product scope.
- Identifying users and workflows.
- Turning goals into measurable outcomes.

**Tasks:**

- [ ] Define a typical webnovel polishing workflow.
- [ ] Identify required features.
- [ ] Separate essential from optional features.
- [ ] Define what faithful refinement means.

**Practical Lab:**
Create a requirements checklist for the first
usable webnovel polishing prototype.

**Checkpoint:**
Describe the minimum viable polishing application.

## Module 1.4 — Success Criteria and Limitations

**Learn:**
- Evaluating AI output quality.
- Detecting hallucinations.
- Recognizing model limitations.
- Understanding privacy and performance tradeoffs.

**Tasks:**

- [ ] Define grammar improvement criteria.
- [ ] Define meaning preservation criteria.
- [ ] Define omission detection criteria.
- [ ] Define acceptable processing speed.

**Practical Lab:**
Create a simple polishing evaluation rubric.

**Checkpoint:**
Determine whether an AI-refined passage is
faithful and useful.

---

# 4. Phase 2 — Hardware Assessment

**Objective:** Understand the hardware requirements
for running local language models.

## Module 2.1 — CPU, RAM, GPU and VRAM

**Learn:**
- CPU functions in inference.
- GPU acceleration.
- System RAM.
- GPU VRAM.
- Hardware bottlenecks.

**Tasks:**

- [ ] Record the home PC's CPU.
- [ ] Record available RAM.
- [ ] Identify the graphics card.
- [ ] Record VRAM.
- [ ] Explain how hardware affects AI performance.

**Practical Lab:**
Document the specifications of the PC hosting
Mini Memory.

**Checkpoint:**
Identify whether the system can support CPU-only
or GPU-accelerated inference.

## Module 2.2 — Model Sizes and Quantization

**Learn:**
- Parameter counts.
- Model weight precision.
- Quantization.
- Memory versus output quality.
- Common model formats.

**Tasks:**

- [ ] Explain what model size means.
- [ ] Explain quantization.
- [ ] Compare approximate memory requirements.
- [ ] Identify candidate model sizes.

**Practical Lab:**
Estimate memory requirements for several
different model configurations.

**Checkpoint:**
Explain the relationship between model size,
precision, and hardware requirements.

## Module 2.3 — Memory and Disk Requirements

**Learn:**
- Model storage.
- Runtime memory consumption.
- Context memory.
- Disk space requirements.
- Model loading behavior.

**Tasks:**

- [ ] Check available disk space.
- [ ] Estimate model download sizes.
- [ ] Estimate runtime memory use.
- [ ] Plan sufficient storage capacity.

**Practical Lab:**
Create a resource budget for Mini Memory.

**Checkpoint:**
Determine whether a candidate model can
realistically run on the PC.

## Module 2.4 — Performance Planning

**Learn:**
- Tokens per second.
- Prefill and generation speed.
- Context length effects.
- CPU and GPU utilization.
- Processing time estimates.

**Tasks:**

- [ ] Define acceptable chapter processing time.
- [ ] Understand tokens-per-second measurements.
- [ ] Identify likely performance bottlenecks.
- [ ] Plan initial benchmark tests.

**Practical Lab:**
Estimate processing requirements for a
typical webnovel chapter.

**Checkpoint:**
Create a realistic hardware and performance plan.

---

# 5. Phase 3 — Local AI Environment

**Objective:** Install and run a language model locally.

## Module 3.1 — Choosing Ollama or LM Studio

**Learn:**
- Local model runtimes.
- Command-line versus graphical tools.
- Model management.
- Local inference APIs.

**Tasks:**

- [ ] Compare Ollama and LM Studio.
- [ ] Identify advantages and limitations.
- [ ] Select a suitable runtime.
- [ ] Explain the chosen runtime's role.

**Practical Lab:**
Document the selected runtime and installation plan.

**Checkpoint:**
Justify the runtime selection for Mini Memory.

## Module 3.2 — Installation and Configuration

**Learn:**
- Runtime installation.
- Local service configuration.
- Model storage paths.
- Basic diagnostics.

**Tasks:**

- [ ] Install the chosen runtime.
- [ ] Verify it starts.
- [ ] Inspect its configuration.
- [ ] Confirm local-only access settings.

**Practical Lab:**
Run the model runtime on the home PC.

**Checkpoint:**
Verify that the local runtime is operational.

## Module 3.3 — Downloading Models

**Learn:**
- Model families.
- Model variants.
- Model licensing.
- Download and storage management.

**Tasks:**

- [ ] Identify a suitable candidate model.
- [ ] Review licensing conditions.
- [ ] Download the model.
- [ ] Verify model availability.

**Practical Lab:**
Install the first local language model.

**Checkpoint:**
Confirm that the model is available locally.

## Module 3.4 — First Inference and Troubleshooting

**Learn:**
- Sending prompts.
- Reading model outputs.
- Monitoring resource usage.
- Diagnosing common failures.

**Tasks:**

- [ ] Run a simple prompt.
- [ ] Refine a short sample paragraph.
- [ ] Observe RAM and GPU usage.
- [ ] Identify basic performance measurements.

**Practical Lab:**
Polish a short webnovel passage using a local LLM.

**Checkpoint:**
Successfully generate a local model response.

---

# 6. Phase 4 — Model Selection and Benchmarking

**Objective:** Identify a reliable model for webnovel
polishing and refinement.

## Module 4.1 — Model Families and Licenses

- [ ] Compare candidate model families.
- [ ] Review relevant model licenses.
- [ ] Identify instruction-tuned models.
- [ ] Select candidates for testing.

**Lab:** Create a shortlist of local models.

## Module 4.2 — Parameters and Context Windows

- [ ] Understand model parameter counts.
- [ ] Understand context window limitations.
- [ ] Compare context sizes.
- [ ] Identify implications for long chapters.

**Lab:** Estimate the context needs of sample chapters.

## Module 4.3 — Speed, Memory and Quality Testing

- [ ] Benchmark generation speed.
- [ ] Measure approximate memory usage.
- [ ] Compare grammar and fluency improvement.
- [ ] Evaluate story preservation.
- [ ] Identify omissions and inventions.

**Lab:** Run the same polishing test on multiple models.

## Module 4.4 — Choosing a Default Model

- [ ] Compare benchmark results.
- [ ] Identify hardware-compatible models.
- [ ] Select a preferred model.
- [ ] Record reasons for the selection.

**Checkpoint:** Choose the initial default model
based on measured performance and refinement quality.

---

# 7. Phase 5 — Prompt Engineering for Webnovels

**Objective:** Develop reliable instructions that
produce faithful, high-quality refinements.

## Module 5.1 — System Prompts and Instructions

- [ ] Understand system and user instructions.
- [ ] Define the AI editor's role.
- [ ] Create an initial polishing prompt.
- [ ] Test instruction consistency.

**Lab:** Create the first Mini Memory polishing profile.

## Module 5.2 — Style Preservation

- [ ] Define the desired editing strength.
- [ ] Preserve authorial voice.
- [ ] Avoid excessive rewriting.
- [ ] Evaluate readability improvements.

**Lab:** Compare light, balanced, and intensive polishing.

## Module 5.3 — Terminology and Character Rules

- [ ] Preserve character names.
- [ ] Maintain item and technique terminology.
- [ ] Handle pronoun consistency.
- [ ] Design terminology constraints.

**Lab:** Test polishing on a chapter with specialized
names and fictional concepts.

## Module 5.4 — Reducing Omissions and Inventions

- [ ] Define prohibited alterations.
- [ ] Identify missing information.
- [ ] Detect invented narrative elements.
- [ ] Develop verification procedures.

**Lab:** Compare original and refined passages
for completeness and fidelity.

**Checkpoint:** Produce a reliable prompt that
improves prose without changing the story.

---

# 8. Phase 6 — Long-Chapter Processing

**Objective:** Process long webnovel chapters
without losing important context or continuity.

## Module 6.1 — Tokens and Context Budgets

- [ ] Understand context limits.
- [ ] Estimate chapter token counts.
- [ ] Allocate space for instructions.
- [ ] Plan safe generation budgets.

## Module 6.2 — Intelligent Text Chunking

- [ ] Split chapters at appropriate boundaries.
- [ ] Preserve paragraph structure.
- [ ] Avoid splitting dialogue unnecessarily.
- [ ] Design chunk-processing functions.

## Module 6.3 — Overlap and Continuity

- [ ] Maintain relevant context between chunks.
- [ ] Handle transitions between scenes.
- [ ] Preserve consistent terminology.
- [ ] Avoid duplicated output.

## Module 6.4 — Chapter-Level Verification

- [ ] Reassemble refined chunks.
- [ ] Verify chapter completeness.
- [ ] Identify missing sections.
- [ ] Identify duplicated content.
- [ ] Review character and terminology consistency.

**Practical Lab:**
Process an entire webnovel chapter through
multiple refinement chunks.

**Checkpoint:**
Produce a complete chapter without major
omissions, duplication, or continuity errors.

---

# 9. Phase 7 — Python and Local AI APIs

**Objective:** Connect Python applications
to locally running language models.

## Module 7.1 — Python Foundations

- [ ] Apply Python functions and data structures.
- [ ] Organize AI-related Python modules.
- [ ] Understand reusable processing functions.
- [ ] Handle application configuration.

## Module 7.2 — Files, Strings and JSON

- [ ] Read text files.
- [ ] Process long strings.
- [ ] Understand JSON serialization.
- [ ] Save generated output safely.

## Module 7.3 — HTTP and Ollama APIs

- [ ] Understand local model API requests.
- [ ] Send inference requests from Python.
- [ ] Read generated responses.
- [ ] Connect local inference to Flask.

## Module 7.4 — Errors, Retries and Logging

- [ ] Handle unavailable models.
- [ ] Handle connection errors.
- [ ] Introduce request timeouts.
- [ ] Record diagnostic information.
- [ ] Handle incomplete generation.

**Practical Lab:**
Build a Python function that sends text
to the local model and receives refined text.

**Checkpoint:**
Successfully process a text passage using
Python and the locally hosted AI runtime.

---

# 10. Phase 8 — Webnovel Polishing Application

**Objective:** Build a usable web application
around the refinement engine.

## Module 8.1 — Application Interface Design

- [ ] Design the chapter input interface.
- [ ] Create refinement settings.
- [ ] Display processing feedback.
- [ ] Support basic accessibility.

## Module 8.2 — File Upload and Export

- [ ] Accept supported text file formats.
- [ ] Validate uploaded files.
- [ ] Protect private chapter content.
- [ ] Implement copy and export features.

## Module 8.3 — Side-by-Side Text Comparison

- [ ] Display original text.
- [ ] Display AI-refined text.
- [ ] Highlight meaningful differences.
- [ ] Allow manual review and editing.

## Module 8.4 — Revision History and Batch Processing

- [ ] Preserve reviewable refinement versions.
- [ ] Allow users to revisit prior results.
- [ ] Design chapter queues.
- [ ] Explore safe batch processing.

**Practical Lab:**
Submit a chapter through the website,
refine it locally, review it, and export it.

**Checkpoint:**
Complete an end-to-end webnovel polishing workflow.

---

# 11. Phase 9 — Knowledge and Memory (RAG)

**Objective:** Improve continuity across chapters
through organized knowledge and retrieval.

## Module 9.1 — Embeddings and Vector Search

- [ ] Understand embeddings.
- [ ] Learn semantic similarity.
- [ ] Explore vector storage.
- [ ] Evaluate retrieval relevance.

## Module 9.2 — Character and Location Glossaries

- [ ] Store character names and identities.
- [ ] Store location terminology.
- [ ] Preserve relationships and titles.
- [ ] Retrieve relevant glossary entries.

## Module 9.3 — Worldbuilding Knowledge Base

- [ ] Record important worldbuilding facts.
- [ ] Organize powers, techniques, and items.
- [ ] Track terminology changes.
- [ ] Identify conflicting information.

## Module 9.4 — Retrieval Augmented Generation

- [ ] Retrieve relevant information before polishing.
- [ ] Add glossary information to prompts.
- [ ] Control retrieved context size.
- [ ] Evaluate whether retrieval improves consistency.

**Practical Lab:**
Refine a chapter with a character and terminology
glossary available to the local model.

**Checkpoint:**
Demonstrate improved name and terminology consistency.

---

# 12. Phase 10 — Customization and Fine-Tuning

**Objective:** Understand options for adapting
local language models to the editing task.

## Module 10.1 — Prompting vs RAG vs Fine-Tuning

- [ ] Compare approaches.
- [ ] Identify suitable use cases.
- [ ] Evaluate technical requirements.
- [ ] Determine whether fine-tuning is necessary.

## Module 10.2 — Preparing Training Examples

- [ ] Understand training data structure.
- [ ] Create suitable input/output examples.
- [ ] Avoid poor-quality examples.
- [ ] Consider licensing and permitted data use.

## Module 10.3 — LoRA and QLoRA Fundamentals

- [ ] Understand parameter-efficient fine-tuning.
- [ ] Learn the purpose of adapters.
- [ ] Evaluate hardware requirements.
- [ ] Understand training limitations.

## Module 10.4 — Evaluation and Overfitting

- [ ] Define evaluation datasets.
- [ ] Understand overfitting.
- [ ] Compare model behavior before and after adaptation.
- [ ] Evaluate whether customization improves the editor.

**Checkpoint:**
Determine whether fine-tuning is beneficial
for Mini Memory's webnovel polishing use case.

Fine-tuning is optional and should only be pursued
when simpler techniques are insufficient.

---

# 13. Phase 11 — General-Purpose AI Assistant

**Objective:** Expand Mini Memory beyond webnovel editing
after the core workflow becomes reliable.

## Module 11.1 — Multiple Task Profiles

- [ ] Design separate AI task configurations.
- [ ] Manage prompts for different use cases.
- [ ] Preserve task-specific settings.

## Module 11.2 — Document Q&A and Code Assistance

- [ ] Explore local document analysis.
- [ ] Implement basic question answering.
- [ ] Evaluate programming assistance quality.
- [ ] Validate source-based answers.

## Module 11.3 — Controlled Local Tools

- [ ] Understand AI tool invocation.
- [ ] Restrict allowed operations.
- [ ] Validate tool inputs.
- [ ] Prevent unsafe automatic actions.

## Module 11.4 — Permissions and Safety

- [ ] Introduce user access restrictions.
- [ ] Protect private files.
- [ ] Understand tool permissions.
- [ ] Handle failures safely.

**Checkpoint:**
Demonstrate a controlled secondary AI feature
without compromising the webnovel editor.

---

# 14. Phase 12 — Optimization and Final Deployment

**Objective:** Make Mini Memory performant, reliable,
maintainable, and suitable for long-term personal use.

## Module 12.1 — Performance and Concurrency

- [ ] Measure inference speed.
- [ ] Reduce unnecessary model loading.
- [ ] Understand concurrent requests.
- [ ] Optimize long-chapter processing.

## Module 12.2 — Storage and Backup

- [ ] Design database backups.
- [ ] Protect chapter drafts.
- [ ] Manage model storage.
- [ ] Test restoration procedures.

## Module 12.3 — Privacy and Network Security

- [ ] Understand localhost and LAN access.
- [ ] Configure authentication.
- [ ] Use a suitable application server.
- [ ] Avoid exposing development services publicly.
- [ ] Protect stored chapter content.

## Module 12.4 — Testing and Maintenance

- [ ] Develop automated tests.
- [ ] Create AI quality regression tests.
- [ ] Document known limitations.
- [ ] Establish update and maintenance procedures.

**Practical Lab:**
Perform a complete end-to-end test of the deployed
webnovel polishing application.

**Final Checkpoint:**
Run Mini Memory reliably on the home PC,
refine chapters using a local AI model, preserve
story consistency, and access the system securely
from authorized devices.

---

# 15. AI Learning Progress Tracker

| Phase | Subject | Status |
|---|---|---|
| 1 | Project Foundations | Not formally assessed |
| 2 | Hardware Assessment | Not formally assessed |
| 3 | Local AI Environment | Pending |
| 4 | Model Selection and Benchmarking | Pending |
| 5 | Prompt Engineering for Webnovels | Pending |
| 6 | Long-Chapter Processing | Pending |
| 7 | Python and Local AI APIs | Pending |
| 8 | Webnovel Polishing Application | Pending |
| 9 | Knowledge and Memory (RAG) | Pending |
| 10 | Customization and Fine-Tuning | Pending |
| 11 | General-Purpose AI Assistant | Pending |
| 12 | Optimization and Final Deployment | Pending |

The AI curriculum must not be marked complete simply
because related website functionality exists.

Formal AI lessons, labs, and checkpoints should be
tracked independently from development lessons.

---

# 16. AI Quality Evaluation Criteria

Mini Memory's webnovel polishing quality should
eventually be evaluated using:

## Language Quality

- Grammar correctness.
- Readability.
- Sentence structure.
- Natural flow.
- Appropriate vocabulary.

## Fidelity to Original Text

- Preservation of story meaning.
- Preservation of plot events.
- Preservation of dialogue intent.
- No invented information.
- No missing substantive content.

## Continuity

- Character name consistency.
- Pronoun consistency.
- Terminology consistency.
- Worldbuilding consistency.
- Cross-chapter continuity.

## Performance

- Processing time.
- Model memory usage.
- Reliability on long chapters.
- Consistency across repeated tests.

## Usability

- Clear input and output interface.
- Reviewable refinements.
- Safe export and storage.
- Local privacy.
- Simple operation.

---

# 17. Roadmap Maintenance Rules

1. Preserve the original 12 phases.
2. Preserve the established module order.
3. Add detailed lessons progressively.
4. Mark completion only after actual learning or testing.
5. Keep development progress in DEVELOPMENT_ROADMAP.md.
6. Keep product requirements in WEBNOVEL_AI.md.
7. Record architecture changes in ARCHITECTURE.md.
8. Record the latest session checkpoint in SESSION_LOG.md.
9. Do not invent completed practical labs.
10. Always prioritize building the webnovel polishing AI.

---

# 18. Related Documentation

- [Project README](../README.md)
- [Development Roadmap](DEVELOPMENT_ROADMAP.md)
- [Webnovel AI Requirements](WEBNOVEL_AI.md)
- [Architecture](ARCHITECTURE.md)
- [Development Guide](DEVELOPMENT_GUIDE.md)
- [AI Context](AI_CONTEXT.md)
- [Session Log](SESSION_LOG.md)

---

# Final Objective

**Learn artificial intelligence by building a real,
locally hosted webnovel polishing and refinement system.**

The ultimate goal is not simply to run a language model.

It is to understand how the model works, select appropriate
technology, design reliable refinement processes, create
a usable application, and independently maintain the system.
