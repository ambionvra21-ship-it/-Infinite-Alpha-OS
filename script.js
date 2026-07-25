// ==========================================
// INFINITY ALPHA v0.1
// SCRIPT.JS - PART 1
// ==========================================


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


// ==========================================
// 🧮 CALCULATOR
// ==========================================

function appendCalc(value) {

    document.getElementById("calcDisplay").value += value;

}


function clearCalc() {

    document.getElementById("calcDisplay").value = "";

}


function deleteCalc() {

    const display = document.getElementById("calcDisplay");

    display.value = display.value.slice(0, -1);

}


function calculateCalc() {

    const display = document.getElementById("calcDisplay");

    try {

        display.value = eval(display.value);

    }

    catch {

        display.value = "Error";

    }

}

// ==========================================
// 💱 CURRENCY CONVERTER
// ==========================================

async function convertCurrency() {

    const amount = parseFloat(document.getElementById("amount").value);

    const from = document.getElementById("fromCurrency").value;

    const to = document.getElementById("toCurrency").value;

    const result = document.getElementById("currencyResult");

    if (isNaN(amount) || amount <= 0) {

        result.textContent = "Please enter a valid amount.";

        return;

    }

    try {

        result.textContent = "Converting...";

        const response = await fetch(
            `https://open.er-api.com/v6/latest/${from}`
        );

        const data = await response.json();

        if (!data.rates || !data.rates[to]) {

            result.textContent = "Exchange rate unavailable.";

            return;

        }

        const converted = amount * data.rates[to];

        result.textContent =
            `${amount} ${from} = ${converted.toFixed(2)} ${to}`;

    }

    catch (error) {

        console.error(error);

        result.textContent = "Unable to connect to exchange service.";

    }

}


// ==========================================
// 🚀 INITIALIZE ALPHA
// ==========================================

window.onload = function () {

    updatePomodoroDisplay();

    console.log("✅ Infinity Alpha v0.1 Loaded");

};
