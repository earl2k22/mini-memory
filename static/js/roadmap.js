
/*
 * MINI MEMORY
 * File: static/js/roadmap.js
 * Purpose: Generate expandable roadmap phase cards
 */

const roadmapContainer = document.getElementById(
    "roadmap-container"
);

function displayRoadmap() {

    // Stop if this page has no roadmap container.
    if (!roadmapContainer) {
        return;
    }

    // Clear existing cards before rebuilding.
    roadmapContainer.replaceChildren();

    // Phases 1-3 are already written in roadmap.html.
    const upcomingPhases = roadmapData.filter(
        function (phase) {
            return phase.id >= 4;
        }
    );

    // Generate an expandable card for each phase.
    upcomingPhases.forEach(function (phase) {

        // Create the expandable container.
        const card = document.createElement("details");
        card.className = "phase-card";

        // Create the clickable heading.
        const summary = document.createElement("summary");
        summary.textContent =
            `Phase ${phase.id}: ${phase.title}`;

        // Open Phase 4 by default.
        if (phase.id === 4) {
            card.open = true;
        }

        // Create the module list.
        const list = document.createElement("ul");

        phase.modules.forEach(function (moduleName) {
            const item = document.createElement("li");

            item.textContent = moduleName;

            list.appendChild(item);
        });

        // Assemble the card.
        card.appendChild(summary);
        card.appendChild(list);

        // Display it on the page.
        roadmapContainer.appendChild(card);
    });
}

// Generate the roadmap when the script runs.
displayRoadmap();
