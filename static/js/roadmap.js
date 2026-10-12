
const checkboxes = document.querySelectorAll(
    ".lesson-checkbox"
);

const progressText = document.getElementById(
    "phase1-progress"
);

const progressFill = document.getElementById(
    "phase1-fill"
);

// Update the displayed completion percentage.
function updateProgress() {
    let completed = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            completed++;
        }
    });

    const total = checkboxes.length;

    const percentage = total > 0
        ? Math.round((completed / total) * 100)
        : 0;

    progressText.textContent =
        `${completed} of ${total} items completed (${percentage}%)`;

    progressFill.style.width = `${percentage}%`;
}

// Restore saved checkbox values.
checkboxes.forEach(function (checkbox) {
    const key = "miniMemory." + checkbox.dataset.lesson;

    checkbox.checked = localStorage.getItem(key) === "true";

    checkbox.addEventListener("change", function () {
        localStorage.setItem(key, String(checkbox.checked));

        updateProgress();
    });
});

// Display progress when the page first loads.
if (progressText && progressFill) {
    updateProgress();
}


const roadmapContainer = document.getElementById(
    "roadmap-container"
);

function displayRoadmap() {
    if (!roadmapContainer) {
        return;
    }

    const upcomingPhases = roadmapData.filter(function (phase) {
        return phase.id >= 4;
    });

    upcomingPhases.forEach(function (phase) {
        const card = document.createElement("article");
        card.className = "phase-card";

        const heading = document.createElement("h3");
        heading.textContent =
            `Phase ${phase.id}: ${phase.title}`;

        const list = document.createElement("ul");

        phase.modules.forEach(function (moduleName) {
            const item = document.createElement("li");
            item.textContent = moduleName;
            list.appendChild(item);
        });

        card.appendChild(heading);
        card.appendChild(list);
        roadmapContainer.appendChild(card);
    });
}

displayRoadmap();
