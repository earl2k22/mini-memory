
/*
 * MINI MEMORY
 * File: static/js/progress.js
 * Purpose: Track and save Phase 1 learning progress
 */

// Find all lesson checkboxes.
const checkboxes = document.querySelectorAll(
    ".lesson-checkbox"
);

// Find the progress text and progress bar.
const progressText = document.getElementById(
    "phase1-progress"
);

const progressFill = document.getElementById(
    "phase1-fill"
);

// Calculate and display progress.
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

    if (progressText) {
        progressText.textContent =
            `${completed} of ${total} items completed (${percentage}%)`;
    }

    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
}

// Restore previous checkbox states.
checkboxes.forEach(function (checkbox) {
    const key = "miniMemory." + checkbox.dataset.lesson;

    checkbox.checked =
        localStorage.getItem(key) === "true";

    // Save changes whenever a checkbox is clicked.
    checkbox.addEventListener("change", function () {
        localStorage.setItem(
            key,
            String(checkbox.checked)
        );

        updateProgress();
    });
});

// Set the initial progress display.
updateProgress();
