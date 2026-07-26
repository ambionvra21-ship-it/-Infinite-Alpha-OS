// ==========================================
// ⏱️ POMODORO ENGINE
// Infinity Alpha v0.3
// ==========================================

let pomodoroTime = 25 * 60;
let pomodoroRunning = false;
let pomodoroInterval = null;

function initPomodoro() {

    updatePomodoroDisplay();

}

function updatePomodoroDisplay() {

    const display =
    document.getElementById("pomodoroTime");

    if (!display) return;

    const minutes =
    Math.floor(pomodoroTime / 60);

    const seconds =
    pomodoroTime % 60;

    display.textContent =
    `${minutes}:${seconds.toString().padStart(2,"0")}`;

}

function togglePomodoro() {

    const button =
    document.getElementById("pomoStartBtn");

    if (!button) return;

    if (!pomodoroRunning) {

        pomodoroRunning = true;

        button.textContent = "Pause";

        pomodoroInterval = setInterval(() => {

            if (pomodoroTime > 0) {

                pomodoroTime--;

                updatePomodoroDisplay();

            }

            else {

                clearInterval(pomodoroInterval);

                pomodoroRunning = false;

                button.textContent = "Start";

                alert("🎉 Focus Session Complete!");

            }

        },1000);

    }

    else {

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

    const button =
    document.getElementById("pomoStartBtn");

    if(button){

        button.textContent="Start";

    }

}
