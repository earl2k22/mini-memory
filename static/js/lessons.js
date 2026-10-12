
/*
 * MINI MEMORY
 * File: static/js/lessons.js
 * Purpose: Display lessons and track module progress
 */

const lessonContainer = document.getElementById(
    "lesson-container"
);

function displayLessons() {
    if (!lessonContainer) {
        return;
    }

    lessonContainer.replaceChildren();

    lessonData.forEach(function (phase) {

        const phaseHeading = document.createElement("h3");
        phaseHeading.textContent = phase.title;

        lessonContainer.appendChild(phaseHeading);

        phase.modules.forEach(function (module) {

            const moduleCard = document.createElement("div");
            moduleCard.className = "module-card";

            const moduleHeading = document.createElement("h4");
            moduleHeading.textContent = module.title;

            const progressText = document.createElement("p");

            const progressBar = document.createElement("div");
            progressBar.className = "progress-bar";

            const progressFill = document.createElement("div");
            progressFill.className = "progress-fill";

            progressBar.appendChild(progressFill);

            const lessonList = document.createElement("div");
            lessonList.className = "lesson-list";

            const moduleCheckboxes = [];

            // Calculate this module's completion.
            function updateModuleProgress() {
                const completed = moduleCheckboxes.filter(
                    function (checkbox) {
                        return checkbox.checked;
                    }
                ).length;

                const total = moduleCheckboxes.length;

                const percentage = total > 0
                    ? Math.round(completed / total * 100)
                    : 0;

                progressText.textContent =
                    `${completed} of ${total} activities completed (${percentage}%)`;

                progressFill.style.width = `${percentage}%`;
            }

            module.lessons.forEach(function (lesson) {

                const label = document.createElement("label");

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.className = "lesson-checkbox";

                const storageKey = "miniMemory.lesson." + lesson.id;

                checkbox.checked =
                    localStorage.getItem(storageKey) === "true";

                const title = document.createElement("span");
                title.textContent =
                    `${lesson.title} (${lesson.type})`;

                label.appendChild(checkbox);
                label.appendChild(title);

                lessonList.appendChild(label);
                moduleCheckboxes.push(checkbox);

                checkbox.addEventListener("change", function () {
                    localStorage.setItem(
                        storageKey,
                        String(checkbox.checked)
                    );

                    updateModuleProgress();
                });
            });

            moduleCard.appendChild(moduleHeading);
            moduleCard.appendChild(progressText);
            moduleCard.appendChild(progressBar);
            moduleCard.appendChild(lessonList);

            lessonContainer.appendChild(moduleCard);

            updateModuleProgress();
        });
    });
}

displayLessons();
