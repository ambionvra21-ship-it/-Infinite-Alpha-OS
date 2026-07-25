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

    displayNotes();

    renderTasks();

    loadWeather();

    updateGreeting();

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

// ==========================================
// ✅ SMART TASKS
// ==========================================

let tasks = JSON.parse(localStorage.getItem("alphaTasks")) || [];

function addTask() {

    const input = document.getElementById("taskInput");

    const text = input.value.trim();

    if (text === "") return;

    tasks.push({
        text: text,
        completed: false
    });

    input.value = "";

    saveTasks();

}

function saveTasks() {

    localStorage.setItem(
        "alphaTasks",
        JSON.stringify(tasks)
    );

    renderTasks();

}

function renderTasks() {

    const list = document.getElementById("taskList");

    list.innerHTML = "";

    let completed = 0;

    tasks.forEach((task, index) => {

        if (task.completed) completed++;

        list.innerHTML += `
        <li class="task-item ${task.completed ? "completed" : ""}">
            <span>${task.text}</span>

            <div class="task-actions">

                <button onclick="toggleTask(${index})">
                    ${task.completed ? "↩" : "✔"}
                </button>

                <button onclick="deleteTask(${index})">
                    🗑
                </button>

            </div>

        </li>
        `;

    });

    const percent =
        tasks.length === 0
            ? 0
            : (completed / tasks.length) * 100;

    document.getElementById("taskProgressBar").style.width =
        percent + "%";

    document.getElementById("taskStats").innerHTML =
        `${completed} of ${tasks.length} completed`;

}

function toggleTask(index) {

    tasks[index].completed =
        !tasks[index].completed;

    saveTasks();

}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

}

renderTasks();

// ==========================================
// ☀️ ALPHA WEATHER ENGINE V1
// ==========================================

async function loadWeather() {

    const temp = document.getElementById("weatherTemp");
    const city = document.getElementById("weatherCity");
    const desc = document.getElementById("weatherDesc");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    city.textContent = "📍 Detecting location...";
    desc.textContent = "Please wait...";

}




// ==========================================
// 🧠 ALPHA INTELLIGENCE
// ==========================================

function updateGreeting() {

    const hour = new Date().getHours();

    const title = document.getElementById("greetingTitle");
    const message = document.getElementById("greetingMessage");

    if(hour >= 5 && hour < 12){

        title.innerHTML = "☀️ Good Morning";
        message.innerHTML =
        "Ready to build something amazing today?";

    }

    else if(hour >= 12 && hour < 18){

        title.innerHTML = "🌤 Good Afternoon";
        message.innerHTML =
        "Keep your momentum going.";

    }

    else if(hour >= 18 && hour < 22){

        title.innerHTML = "🌇 Good Evening";
        message.innerHTML =
        "Let's finish today strong.";

    }

    else{

        title.innerHTML = "🌙 Working Late?";
        message.innerHTML =
        "Don't forget to recharge.";

    }

}
