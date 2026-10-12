
/*
 * MINI MEMORY
 * Lesson Data Model
 *
 * Phase -> Module -> Lessons
 */

const lessonData = [
    {
        id: "phase-1",
        title: "Project Foundations",

        modules: [
            {
                id: "phase-1-module-1",
                title: "LLM Basics and Terminology",

                lessons: [
                    {
                        id: "p1-m1-l1",
                        title: "What is a Large Language Model?",
                        type: "lesson"
                    },
                    {
                        id: "p1-m1-l2",
                        title: "Parameters, Tokens, and Context",
                        type: "lesson"
                    },
                    {
                        id: "p1-m1-lab1",
                        title: "Explore AI Model Outputs",
                        type: "lab"
                    },
                    {
                        id: "p1-m1-check1",
                        title: "Knowledge Assessment",
                        type: "checkpoint"
                    }
                ]
            }
        ]
    }
];
