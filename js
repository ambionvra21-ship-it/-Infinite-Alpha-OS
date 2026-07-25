Infinity-Alpha/
│
├── index.html
├── style.css
├── script.js
│
└── js/

  pomodoro.js

// ==========================================
// ⏱️ POMODORO TIMER
// ==========================================

let pomodoroTime = 25 * 60;
let pomodoroRunning = false;
let pomodoroInterval = null;

function updatePomodoroDisplay() {

    const minutes = Math.floor(pomodoroTime / 60);
    const seconds = pomodoroTime % 60;

    document.getElementById("pomodoroTime").textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;

}

function togglePomodoro() {

    const button = document.getElementById("pomoStartBtn");

    if (!pomodoroRunning) {

        pomodoroRunning = true;
        button.textContent = "Pause";

        pomodoroInterval = setInterval(() => {

            if (pomodoroTime > 0) {

                pomodoroTime--;

                updatePomodoroDisplay();

            } else {

                clearInterval(pomodoroInterval);

                pomodoroRunning = false;

                button.textContent = "Start";

                alert("🎉 Focus Session Complete!");

            }

        }, 1000);

    } else {

        clearInterval(pomodoroInterval);

        pomodoroRunning = false;

        button.textContent = "Start";

    }

}

function resetPomodoro() {

    clearInterval(pomodoroInterval);

    pomodoroRunning = false;

    pomodoroTime = 25 * 60;

    updatePomodoroDisplay();

    document.getElementById("pomoStartBtn").textContent = "Start";

}
