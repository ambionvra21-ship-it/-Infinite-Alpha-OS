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


function updatePomodoroDisplay(){

    const display =
    document.getElementById("pomodoroTime");

    if(!display) return;

    const minutes =
    Math.floor(pomodoroTime / 60);

    const seconds =
    pomodoroTime % 60;


    display.textContent =
    `${minutes}:${seconds.toString().padStart(2,"0")}`;

}



function togglePomodoro(){

    const button =
    document.getElementById("pomoStartBtn");

    if(!button) return;


    if(!pomodoroRunning){

        pomodoroRunning = true;

        button.textContent = "Pause";


        pomodoroInterval =
        setInterval(()=>{


            if(pomodoroTime > 0){

                pomodoroTime--;

                updatePomodoroDisplay();

            }

            else{

                clearInterval(pomodoroInterval);

                pomodoroRunning=false;

                button.textContent="Start";

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


    const button =
    document.getElementById("pomoStartBtn");


    if(button){

        button.textContent="Start";

    }

}



// ==========================================
// 🧮 CALCULATOR
// ==========================================


function appendCalc(value){

    const display =
    document.getElementById("calcDisplay");

    if(display){

        display.value += value;

    }

}



function clearCalc(){

    const display =
    document.getElementById("calcDisplay");

    if(display){

        display.value="";

    }

}



function deleteCalc(){

    const display =
    document.getElementById("calcDisplay");

    if(display){

        display.value =
        display.value.slice(0,-1);

    }

}



function calculateCalc(){

    const display =
    document.getElementById("calcDisplay");


    if(!display) return;


    try{

        display.value =
        eval(display.value);

    }

    catch{

        display.value="Error";

    }

}



// ==========================================
// 💱 CURRENCY CONVERTER
// ==========================================


async function convertCurrency(){


    const amount =
    parseFloat(
    document.getElementById("amount").value
    );


    const from =
    document.getElementById("fromCurrency").value;


    const to =
    document.getElementById("toCurrency").value;


    const result =
    document.getElementById("currencyResult");



    if(isNaN(amount)){


        result.textContent =
        "Enter an amount.";

        return;

    }



    result.textContent =
    "Converting...";



    try{


        const response =
        await fetch(
        `https://open.er-api.com/v6/latest/${from}`
        );


        const data =
        await response.json();


        const converted =
        amount * data.rates[to];



        result.textContent =
        `${amount} ${from} = ${converted.toFixed(2)} ${to}`;


    }


    catch(error){


        console.log(error);


        result.textContent =
        "Exchange service unavailable.";


    }


}



// ==========================================
// 🧠 GREETING ENGINE
// ==========================================


function updateGreeting(){


    const title =
    document.getElementById("greetingTitle");


    const message =
    document.getElementById("greetingMessage");



    if(!title || !message) return;



    const hour =
    new Date().getHours();



    if(hour < 12){


        title.innerHTML =
        "☀️ Good Morning";


        message.innerHTML =
        "Ready to build something amazing today?";


    }


    else if(hour < 18){


        title.innerHTML =
        "🌤 Good Afternoon";


        message.innerHTML =
        "Keep your momentum going.";


    }


    else if(hour < 22){


        title.innerHTML =
        "🌇 Good Evening";


        message.innerHTML =
        "Let's finish today strong.";


    }


    else{


        title.innerHTML =
        "🌙 Working Late?";


        message.innerHTML =
        "Don't forget to recharge.";


    }


}



// ==========================================
// 🚀 STARTUP ENGINE
// ==========================================


function alphaStart(){


    updatePomodoroDisplay();

    updateGreeting();


    console.log(
    "✅ Infinity Alpha Core Loaded"
    );


}


window.addEventListener(
"DOMContentLoaded",
alphaStart
);

// ==========================================
// 📝 SMART NOTES ENGINE
// ==========================================


let notes =
JSON.parse(localStorage.getItem("alphaNotes")) || [];



function saveNote(){


    const title =
    document.getElementById("noteTitle").value.trim();


    const content =
    document.getElementById("noteContent").value.trim();



    if(!title || !content){

        alert("Please enter title and note.");

        return;

    }



    notes.unshift({

        title:title,

        content:content,

        date:new Date().toLocaleString()

    });



    localStorage.setItem(
        "alphaNotes",
        JSON.stringify(notes)
    );



    displayNotes();


    clearNote();


}




function displayNotes(){


    const list =
    document.getElementById("notesList");


    if(!list) return;



    list.innerHTML="";



    notes.forEach((note,index)=>{


        list.innerHTML += `

        <div class="note-item"
        onclick="loadNote(${index})">

            <strong>${note.title}</strong>

            <br>

            <small>${note.date}</small>

        </div>

        `;


    });


}




function loadNote(index){


    document.getElementById("noteTitle").value =
    notes[index].title;


    document.getElementById("noteContent").value =
    notes[index].content;


}




function clearNote(){


    const title =
    document.getElementById("noteTitle");


    const content =
    document.getElementById("noteContent");



    if(title) title.value="";


    if(content) content.value="";


}




function searchNotes(){


    const search =
    document.getElementById("noteSearch");


    if(!search) return;



    const keyword =
    search.value.toLowerCase();



    const items =
    document.querySelectorAll(".note-item");



    items.forEach(item=>{


        if(item.innerText.toLowerCase().includes(keyword)){


            item.style.display="block";


        }

        else{


            item.style.display="none";


        }


    });


}




// ==========================================
// ✅ SMART TASK ENGINE
// ==========================================



let tasks =
JSON.parse(localStorage.getItem("alphaTasks")) || [];





function addTask(){


    const input =
    document.getElementById("taskInput");


    if(!input) return;



    const text =
    input.value.trim();



    if(text==="") return;



    tasks.push({

        text:text,

        completed:false

    });



    input.value="";


    saveTasks();


}




function saveTasks(){


    localStorage.setItem(

        "alphaTasks",

        JSON.stringify(tasks)

    );


    renderTasks();


}




function renderTasks(){


    const list =
    document.getElementById("taskList");


    if(!list) return;



    list.innerHTML="";


    let completed=0;




    tasks.forEach((task,index)=>{


        if(task.completed){

            completed++;

        }



        list.innerHTML += `

        <li class="task-item">

            <span>
            ${task.text}
            </span>


            <button onclick="toggleTask(${index})">

            ${task.completed ? "↩" : "✔"}

            </button>



            <button onclick="deleteTask(${index})">

            🗑

            </button>


        </li>

        `;



    });



    const stats =
    document.getElementById("taskStats");


    const bar =
    document.getElementById("taskProgressBar");



    if(stats){


        stats.innerHTML =
        `${completed} of ${tasks.length} completed`;

    }




    if(bar){


        const percent =
        tasks.length===0
        ?0
        :(completed/tasks.length)*100;



        bar.style.width =
        percent+"%";


    }



}





function toggleTask(index){


    tasks[index].completed =
    !tasks[index].completed;


    saveTasks();


}





function deleteTask(index){


    tasks.splice(index,1);


    saveTasks();


}




// Load saved data


document.addEventListener(
"DOMContentLoaded",
()=>{


    displayNotes();


    renderTasks();


});

// ==========================================
// ☀️ ALPHA WEATHER ENGINE FINAL
// ==========================================


async function loadWeather(){


    const temp =
    document.getElementById("weatherTemp");


    const city =
    document.getElementById("weatherCity");


    const desc =
    document.getElementById("weatherDesc");


    const humidity =
    document.getElementById("humidity");


    const wind =
    document.getElementById("wind");



    if(!temp || !city){

        return;

    }



    city.textContent =
    "📍 Detecting location...";


    desc.textContent =
    "Connecting...";



    if(!navigator.geolocation){


        city.textContent =
        "GPS not supported";


        return;

    }




    navigator.geolocation.getCurrentPosition(

    async(position)=>{


        const lat =
        position.coords.latitude;


        const lon =
        position.coords.longitude;



        try{


            // WEATHER DATA

            const weatherResponse =
            await fetch(

            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`

            );



            const weather =
            await weatherResponse.json();




            // LOCATION NAME

            const locationResponse =
            await fetch(

            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`

            );



            const location =
            await locationResponse.json();




            const place =

            location.city ||

            location.locality ||

            location.principalSubdivision ||

            "Current Location";






            temp.textContent =

            Math.round(
            weather.current.temperature_2m
            )

            +"°C";




            city.textContent =

            "📍 " + place;




            desc.textContent =

            weatherDescription(

            weather.current.weather_code

            );




            humidity.textContent =

            weather.current.relative_humidity_2m
            +"%";




            wind.textContent =

            weather.current.wind_speed_10m
            +" km/h";





        }


        catch(error){


            console.log(error);


            city.textContent =
            "Weather connection failed";


            desc.textContent =
            "Try refresh";

        }



    },



    (error)=>{


        console.log(error);


        city.textContent =
        "📍 Location permission needed";


        desc.textContent =
        "Allow location access";



    },



    {

        enableHighAccuracy:false,

        timeout:15000,

        maximumAge:300000

    }



    );


}




function weatherDescription(code){


    if(code===0)

    return "☀️ Clear Sky";


    if(code<=3)

    return "⛅ Partly Cloudy";


    if(code<=48)

    return "🌫 Fog";


    if(code<=67)

    return "🌧 Rain";


    if(code<=82)

    return "🌦 Showers";


    if(code<=99)

    return "⛈ Thunderstorm";


    return "Weather";


}




// ==========================================
// 🚀 FINAL ALPHA START SYSTEM
// ==========================================


window.addEventListener(

"DOMContentLoaded",

()=>{


    updatePomodoroDisplay();


    updateGreeting();


    displayNotes();


    renderTasks();


    loadWeather();



    console.log(

    "🚀 Infinity Alpha v0.2 ONLINE"

    );


}

);

// ==========================================
// 📈 FINANCE ALPHA ENGINE v1.1
// ==========================================


let financeTransactions =
JSON.parse(localStorage.getItem("alphaFinance")) || [];


// ==========================================
// ADD TRANSACTION
// ==========================================

function addFinanceTransaction(){

    const description =
    document.getElementById("financeDescription");

    const amountInput =
    document.getElementById("financeAmount");

    const categoryInput =
    document.getElementById("financeCategory");


    if(!description || !amountInput || !categoryInput){
        console.log("Finance inputs missing");
        return;
    }


    const name =
    description.value.trim();


    const amount =
    Number(amountInput.value);


    const category =
    categoryInput.value;


    if(name === "" || isNaN(amount) || amount <= 0){

        alert("Please enter valid transaction details.");

        return;

    }


    financeTransactions.push({

        id: Date.now(),

        description:name,

        amount:amount,

        category:category,

        date:new Date().toLocaleString()

    });


    saveFinance();


    description.value="";

    amountInput.value="";


}



// ==========================================
// SAVE FINANCE
// ==========================================

function saveFinance(){

    localStorage.setItem(
        "alphaFinance",
        JSON.stringify(financeTransactions)
    );


    updateFinanceDashboard();

}



// ==========================================
// UPDATE FINANCE DASHBOARD
// ==========================================

function updateFinanceDashboard(){


    let income = 0;

    let expenses = 0;



    financeTransactions.forEach(item=>{


        if(item.category === "Income"){

            income += item.amount;

        }

        else{

            expenses += item.amount;

        }


    });



    const balance =
    income - expenses;



    const incomeBox =
    document.getElementById("totalIncome");


    const expenseBox =
    document.getElementById("totalExpenses");


    const balanceBox =
    document.getElementById("totalBalance");



    if(incomeBox)
    incomeBox.textContent =
    "$" + income.toFixed(2);



    if(expenseBox)
    expenseBox.textContent =
    "$" + expenses.toFixed(2);



    if(balanceBox)
    balanceBox.textContent =
    "$" + balance.toFixed(2);



    renderFinanceHistory();


}



// ==========================================
// TRANSACTION HISTORY
// ==========================================

function renderFinanceHistory(){


    const list =
    document.getElementById("financeList");


    if(!list) return;



    list.innerHTML="";



    financeTransactions
    .slice()
    .reverse()
    .forEach(item=>{


        list.innerHTML += `

        <li>

        <strong>
        ${item.description}
        </strong>

        <br>

        ${item.category}
        -
        $${item.amount.toFixed(2)}

        <br>

        <small>
        ${item.date}
        </small>

        </li>

        `;


    });


}

// ==========================================
// 🤖 ALPHA FINANCIAL INTELLIGENCE v2
// ==========================================

function runAlphaFinanceAI(){

    const report =
    document.getElementById("alphaFinanceReport");

    const scoreBox =
    document.getElementById("alphaFinanceScore");

    const adviceBox =
    document.getElementById("alphaFinanceAdvice");


    if(!report) return;


    let income = 0;
    let expenses = 0;

    let categories = {};


    financeTransactions.forEach(item=>{


        if(item.category === "Income"){

            income += item.amount;

        }

        else{

            expenses += item.amount;


            if(!categories[item.category]){

                categories[item.category] = 0;

            }


            categories[item.category] += item.amount;

        }

    });



    const balance =
    income - expenses;



    let score = 50;


    if(income > expenses){

        score += 30;

    }


    if(expenses < income * 0.5){

        score += 15;

    }


    if(balance > 0){

        score += 5;

    }


    if(score > 100){

        score = 100;

    }

    // ==========================================
// 🤖 ALPHA COMMAND CENTER v1
// ==========================================

function runAlphaCommand() {

    const input = document.getElementById("alphaCommandInput");
    const response = document.getElementById("alphaAssistantResponse");

    if (!input || !response) return;

    const command = input.value.trim().toLowerCase();

    if (command === "") {

        response.innerHTML =
        "🤖 Please ask me something.";

        return;

    }

    // ===============================
    // BALANCE
    // ===============================

    if (
        command.includes("balance") ||
        command.includes("money")
    ) {

        const balance =
        document.getElementById("totalBalance").textContent;

        response.innerHTML =
        `<strong>📊 Current Balance</strong><br>${balance}`;

    }

    // ===============================
    // INCOME
    // ===============================

    else if (
        command.includes("income") ||
        command.includes("salary")
    ) {

        const income =
        document.getElementById("totalIncome").textContent;

        response.innerHTML =
        `<strong>💵 Total Income</strong><br>${income}`;

    }

    // ===============================
    // EXPENSES
    // ===============================

    else if (
        command.includes("expense") ||
        command.includes("expenses") ||
        command.includes("spent")
    ) {

        const expenses =
        document.getElementById("totalExpenses").textContent;

        response.innerHTML =
        `<strong>💸 Total Expenses</strong><br>${expenses}`;

    }

    // ===============================
    // TRANSACTIONS
    // ===============================

    else if (
        command.includes("transaction") ||
        command.includes("history")
    ) {

        response.innerHTML =
        `📜 You currently have <strong>${financeTransactions.length}</strong> transaction(s).`;

    }

    // ===============================
    // FOOD
    // ===============================

    else if (
        command.includes("food")
    ) {

        let totalFood = 0;

        financeTransactions.forEach(item => {

            if(item.category === "Food"){

                totalFood += item.amount;

            }

        });

        response.innerHTML =
        `🍔 Food Spending<br><strong>$${totalFood.toFixed(2)}</strong>`;

    }

    // ===============================
    // HELLO
    // ===============================

    else if (
        command.includes("hello") ||
        command.includes("hi")
    ) {

        response.innerHTML =
        "👋 Hello! I'm Alpha. Ask me about your finances.";

    }

    // ===============================
    // UNKNOWN
    // ===============================

    else {

        response.innerHTML =
        "🤖 I don't understand that yet.<br>Try asking:<br><br>• balance<br>• income<br>• expenses<br>• food<br>• transactions";

    }

    input.value = "";

}

console.log("🤖 Alpha Command Center Loaded");


    let biggestCategory = "None";

    let biggestAmount = 0;



    for(let category in categories){

        if(categories[category] > biggestAmount){

            biggestAmount = categories[category];

            biggestCategory = category;

        }

    }



    report.innerHTML = `

    🟢 Financial position is positive.

    <br><br>

    💵 Income:
    $${income.toFixed(2)}

    <br>

    💸 Expenses:
    $${expenses.toFixed(2)}

    <br>

    📊 Balance:
    $${balance.toFixed(2)}

    `;



    scoreBox.innerHTML = `

    🧠 Financial Health Score:

    <strong>${score}/100</strong>

    `;



    adviceBox.innerHTML = `

    🍔 Biggest Spending Category:

    ${biggestCategory}

    <br><br>

    🤖 Alpha Suggestion:

    ${
        expenses > income
        ?
        "Reduce spending and create a budget."
        :
        "Great control. Consider saving or investing your surplus."
    }

    `;


}


console.log("🤖 Alpha Financial Intelligence v2 Loaded");

