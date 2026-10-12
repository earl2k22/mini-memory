
const button = document.getElementById("complete-lesson");
const statusText = document.getElementById("lesson-status");

const storageKey = "miniMemory.phase1.lesson1.completed";

let isCompleted = localStorage.getItem(storageKey) === "true";

function updateDisplay() {
    if (isCompleted) {
        statusText.textContent = "Status: Completed";
        button.textContent = "Mark as Incomplete";
    } else {
        statusText.textContent = "Status: Not Completed";
        button.textContent = "Mark Lesson as Complete";
    }
}

if (button && statusText) {
    updateDisplay();

    button.addEventListener("click", function () {
        isCompleted = !isCompleted;

        localStorage.setItem(storageKey, String(isCompleted));

        updateDisplay();
    });
}
