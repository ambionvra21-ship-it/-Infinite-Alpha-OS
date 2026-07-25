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
// 📈 FINANCE ALPHA ENGINE v1
// ==========================================

let transactions = JSON.parse(
    localStorage.getItem("alphaFinance")
) || [];


// Add Transaction

function addTransaction(){

    const name =
        document.getElementById("transactionName").value.trim();

    const amount =
        Number(document.getElementById("transactionAmount").value);

    const type =
        document.getElementById("transactionType").value;

    const category =
        document.getElementById("transactionCategory").value;


    if(!name || !amount){

        alert("Please enter description and amount.");

        return;

    }


    transactions.push({

        id: Date.now(),

        name:name,

        amount:amount,

        type:type,

        category:category,

        date:new Date().toLocaleDateString()

    });


    saveFinance();


    document.getElementById("transactionName").value="";
    document.getElementById("transactionAmount").value="";


}



// Save Finance

function saveFinance(){

    localStorage.setItem(
        "alphaFinance",
        JSON.stringify(transactions)
    );


    updateFinance();

}



// Update Dashboard

function updateFinance(){

    let income = 0;

    let expense = 0;


    transactions.forEach(item=>{


        if(item.type==="income"){

            income += item.amount;

        }

        else{

            expense += item.amount;

        }


    });



    document.getElementById("totalIncome").textContent =
        "$" + income.toFixed(2);


    document.getElementById("totalExpense").textContent =
        "$" + expense.toFixed(2);


    document.getElementById("balance").textContent =
        "$" + (income-expense).toFixed(2);



    renderTransactions();


}



// Transaction History

function renderTransactions(){


    const list =
        document.getElementById("transactionList");


    if(!list) return;


    list.innerHTML="";


    transactions.forEach(item=>{


        const li=document.createElement("li");


        li.innerHTML=`

        ${item.name}
        -
        $${item.amount}
        -
        ${item.category}

        <button onclick="deleteTransaction(${item.id})">
        🗑
        </button>

        `;


        list.appendChild(li);


    });


}



// Delete

function deleteTransaction(id){


    transactions =
    transactions.filter(item=>item.id !== id);


    saveFinance();


}



// Start Finance

updateFinance();
