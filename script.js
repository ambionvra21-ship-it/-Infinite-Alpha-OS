// ==========================================
// ⏱️ POMODORO TIMER SYSTEM
// ==========================================

let pomodoroTime = 25 * 60;
let pomodoroRunning = false;
let pomodoroInterval;

function togglePomodoro() {

    const button = document.getElementById("pomoStartBtn");

    if (!pomodoroRunning) {

        pomodoroRunning = true;
        button.innerHTML = "Pause";

        pomodoroInterval = setInterval(() => {

            let minutes = Math.floor(pomodoroTime / 60);
            let seconds = pomodoroTime % 60;

            document.getElementById("pomodoroTime").innerHTML =
                `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

            if (pomodoroTime <= 0) {
                clearInterval(pomodoroInterval);
                alert("Focus session complete! 🎉");
                pomodoroRunning = false;
                button.innerHTML = "Start";
            }

            pomodoroTime--;

        }, 1000);

    } else {

        clearInterval(pomodoroInterval);
        pomodoroRunning = false;
        button.innerHTML = "Start";

    }
}


function resetPomodoro() {

    clearInterval(pomodoroInterval);

    pomodoroRunning = false;
    pomodoroTime = 25 * 60;

    document.getElementById("pomodoroTime").innerHTML = "25:00";

    document.getElementById("pomoStartBtn").innerHTML = "Start";
}
