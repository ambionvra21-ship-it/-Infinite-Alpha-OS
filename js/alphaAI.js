// ==========================================
// 🤖 INFINITY ALPHA AI ASSISTANT v3
// Unified Alpha Core Interface
// ==========================================

console.log("🤖 Alpha AI v3 Loaded");



window.runAlphaCommand = function(){


    const input =
    document.getElementById("alphaCommandInput");


    const response =
    document.getElementById("alphaAssistantResponse");


    if(!input || !response){
        console.log("Alpha interface missing");
        return;
    }


    const command =
    input.value.toLowerCase().trim();



    if(command.length === 0){

        response.innerHTML =
        "🤖 Please ask Alpha something.";

        return;
    }



    let answer = "";



    // ==================================
    // GREETING
    // ==================================

    if(
        command.includes("hello") ||
        command.includes("hi") ||
        command.includes("hey")
    ){

        answer =
        "👋 Hello! I am Infinity Alpha AI. Your personal intelligence assistant.";

    }



    // ==================================
    // WEATHER
    // ==================================

    else if(
        command.includes("weather") ||
        command.includes("temperature") ||
        command.includes("rain") ||
        command.includes("forecast")
    ){

        answer =
        `
        🌤 Weather system activated.<br><br>
        Alpha detected a weather request.<br>
        Connecting weather intelligence module...
        `;

    }



    // ==================================
    // FINANCE
    // ==================================

    else if(
        command.includes("balance") ||
        command.includes("money") ||
        command.includes("finance") ||
        command.includes("budget")
    ){


        let income = 0;
        let expenses = 0;



        if(typeof alphaFinance !== "undefined"){


            alphaFinance.forEach(item => {


                if(item.category === "Income"){

                    income += Number(item.amount);

                }
                else{

                    expenses += Number(item.amount);

                }


            });


        }



        let balance =
        income - expenses;



        answer =
        "💰 Current balance: $" 
        + balance.toFixed(2);


    }



    // ==================================
    // TASKS
    // ==================================

    else if(
        command.includes("task")
    ){


        let total = 0;


        if(typeof alphaTasks !== "undefined"){

            total = alphaTasks.length;

        }


        answer =
        "✅ You have "
        + total
        + " tasks in Alpha.";

    }



    // ==================================
    // NOTES
    // ==================================

    else if(
        command.includes("note")
    ){

        answer =
        "📝 Smart Notes system is ready.";

    }



    // ==================================
    // POMODORO
    // ==================================

    else if(
        command.includes("focus") ||
        command.includes("pomodoro") ||
        command.includes("timer")
    ){

        answer =
        "⏱️ Pomodoro Focus Mode activated.";

    }



    // ==================================
    // TIME
    // ==================================

    else if(
        command.includes("time")
    ){

        answer =
        "🕒 Current time: "
        + new Date().toLocaleTimeString();

    }



    // ==================================
    // CRYPTO / MARKET
    // ==================================

    else if(
        command.includes("crypto") ||
        command.includes("bitcoin") ||
        command.includes("stock") ||
        command.includes("market")
    ){

        answer =
        "📈 Market intelligence module activated.";

    }



    // ==================================
    // DEFAULT
    // ==================================

    else{


        answer =
        `
        🤖 Alpha is learning.<br><br>

        Try asking:<br>
        🌤 Weather<br>
        💰 Finance<br>
        ⏱ Pomodoro<br>
        📝 Notes<br>
        📈 Crypto<br>
        🕒 Time
        `;


    }



    response.innerHTML = answer;


    input.value = "";


    console.log(
        "Alpha:",
        command
    );


};
