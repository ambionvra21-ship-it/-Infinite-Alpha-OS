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

// ==========================================
// 📝 SMART NOTES PRO
// ==========================================

let notes = JSON.parse(localStorage.getItem("alphaNotes")) || [];

function saveNote() {

    const title = document.getElementById("noteTitle").value.trim();
    const content = document.getElementById("noteContent").value.trim();

    if (!title || !content) {
        alert("Please enter both a title and note.");
        return;
    }

    notes.unshift({
        title,
        content,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("alphaNotes", JSON.stringify(notes));

    displayNotes();

    clearNote();
}

function displayNotes() {

    const list = document.getElementById("notesList");

    list.innerHTML = "";

    notes.forEach((note, index) => {

        list.innerHTML += `
            <div class="note-item" onclick="loadNote(${index})">
                <strong>${note.title}</strong><br>
                <small>${note.date}</small>
            </div>
        `;

    });

}

function loadNote(index) {

    document.getElementById("noteTitle").value =
        notes[index].title;

    document.getElementById("noteContent").value =
        notes[index].content;

}

function clearNote() {

    document.getElementById("noteTitle").value = "";

    document.getElementById("noteContent").value = "";

}

function searchNotes() {

    const keyword =
        document.getElementById("noteSearch")
        .value
        .toLowerCase();

    const items =
        document.querySelectorAll(".note-item");

    items.forEach((item) => {

        if (item.innerText.toLowerCase().includes(keyword)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}

displayNotes();
