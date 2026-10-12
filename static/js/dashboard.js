
/*
 * MINI MEMORY
 * File: static/js/dashboard.js
 * Purpose: Display saved learning progress
 */

const dashboardProgress = document.getElementById(
    "dashboard-progress"
);

const dashboardFill = document.getElementById(
    "dashboard-progress-fill"
);

const dashboardBar = document.getElementById(
    "dashboard-progressbar"
);

const dashboardModuleStatus = document.getElementById(
    "dashboard-module-status"
);

function calculateLearningProgress() {
    let completed = 0;
    let total = 0;
    let completedModules = 0;
    let trackedModules = 0;

    lessonData.forEach(function (phase) {
        phase.modules.forEach(function (module) {
            const activities = module.lessons;

            if (activities.length === 0) {
                return;
            }

            trackedModules++;

            let moduleCompleted = 0;

            activities.forEach(function (lesson) {
                const key = "miniMemory.lesson." + lesson.id;
                const isDone = localStorage.getItem(key) === "true";

                total++;

                if (isDone) {
                    completed++;
                    moduleCompleted++;
                }
            });

            if (moduleCompleted === activities.length) {
                completedModules++;
            }
        });
    });

    return {
        completed: completed,
        total: total,
        completedModules: completedModules,
        trackedModules: trackedModules,
        percentage: total > 0
            ? Math.round(completed / total * 100)
            : 0
    };
}

function updateDashboard() {
    const progress = calculateLearningProgress();

    dashboardProgress.textContent =
        `${progress.completed} of ${progress.total} tracked activities completed (${progress.percentage}%)`;

    dashboardFill.style.width =
        `${progress.percentage}%`;

    dashboardBar.setAttribute(
        "aria-valuenow",
        String(progress.percentage)
    );

    dashboardModuleStatus.textContent =
        `${progress.completedModules} of ${progress.trackedModules} tracked modules completed`;
}

if (dashboardProgress && dashboardFill &&
    dashboardBar && dashboardModuleStatus) {
    updateDashboard();
}
