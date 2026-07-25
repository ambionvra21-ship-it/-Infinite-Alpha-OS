// ==========================================
// INFINITY ALPHA v0.2
// CORE ENGINE - BATCH 1
// ==========================================

console.log("🚀 Infinity Alpha Starting...");

// ==========================================
// ⏱️ POMODORO TIMER
// ==========================================

let pomodoroTime = 25 * 60;
let pomodoroRunning = false;
let pomodoroInterval = null;

function updatePomodoroDisplay() {

    const display = document.getElementById("pomodoroTime");

    if (!display) return;

    const minutes = Math.floor(pomodoroTime / 60);
    const seconds = pomodoroTime % 60;

    display.textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;

}

function togglePomodoro() {

    const button = document.getElementById("pomoStartBtn");

    if (!button) return;

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

        },1000);

    }

    else{

        clearInterval(pomodoroInterval);

        pomodoroRunning=false;

        button.textContent="Start";

    }

}

function resetPomodoro(){

    clearInterval(pomodoroInterval);

    pomodoroRunning=false;

    pomodoroTime=25*60;

    updatePomodoroDisplay();

    const btn=document.getElementById("pomoStartBtn");

    if(btn) btn.textContent="Start";

}

// ==========================================
// 🧮 CALCULATOR
// ==========================================

function appendCalc(value){

    document.getElementById("calcDisplay").value+=value;

}

function clearCalc(){

    document.getElementById("calcDisplay").value="";

}

function deleteCalc(){

    const display=document.getElementById("calcDisplay");

    display.value=display.value.slice(0,-1);

}

function calculateCalc(){

    const display=document.getElementById("calcDisplay");

    try{

        display.value=eval(display.value);

    }

    catch{

        display.value="Error";

    }

}

// ==========================================
// 💱 CURRENCY CONVERTER
// ==========================================

async function convertCurrency(){

    const amount=parseFloat(document.getElementById("amount").value);

    const from=document.getElementById("fromCurrency").value;

    const to=document.getElementById("toCurrency").value;

    const result=document.getElementById("currencyResult");

    if(isNaN(amount)){

        result.textContent="Enter an amount.";

        return;

    }

    result.textContent="Converting...";

    try{

        const response=await fetch(
            `https://open.er-api.com/v6/latest/${from}`
        );

        const data=await response.json();

        const converted=amount*data.rates[to];

        result.textContent=
        `${amount} ${from} = ${converted.toFixed(2)} ${to}`;

    }

    catch{

        result.textContent=
        "Exchange service unavailable.";

    }

}

// ==========================================
// 🧠 GREETING ENGINE
// ==========================================

function updateGreeting(){

    const title=document.getElementById("greetingTitle");

    const message=document.getElementById("greetingMessage");

    if(!title || !message) return;

    const hour=new Date().getHours();

    if(hour<12){

        title.innerHTML="☀️ Good Morning";

        message.innerHTML=
        "Ready to build something amazing today?";

    }

    else if(hour<18){

        title.innerHTML="🌤 Good Afternoon";

        message.innerHTML=
        "Keep your momentum going.";

    }

    else if(hour<22){

        title.innerHTML="🌇 Good Evening";

        message.innerHTML=
        "Let's finish today strong.";

    }

    else{

        title.innerHTML="🌙 Working Late?";

        message.innerHTML=
        "Don't forget to recharge.";

    }

}

// ==========================================
// 🚀 INITIALIZE ALPHA
// ==========================================

window.onload=function(){

    updatePomodoroDisplay();

    updateGreeting();

    console.log("✅ Infinity Alpha Ready");

};
