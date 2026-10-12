
/*
 * MINI MEMORY
 * Render the lesson hierarchy.
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

            moduleCard.appendChild(moduleHeading);

            const lessonList = document.createElement("ul");

            module.lessons.forEach(function (lesson) {
                const item = document.createElement("li");

                item.textContent =
                    `${lesson.title} (${lesson.type})`;

                lessonList.appendChild(item);
            });

            moduleCard.appendChild(lessonList);
            lessonContainer.appendChild(moduleCard);
        });
    });
}

displayLessons();
