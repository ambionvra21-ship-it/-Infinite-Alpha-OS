// ==========================================
// 🤖 INFINITY ALPHA AI ASSISTANT v2
// ==========================================

console.log("🤖 Alpha AI v2 Loaded");


window.runAlphaCommand = function(){


    const input =
    document.getElementById("alphaCommandInput");


    const response =
    document.getElementById("alphaAssistantResponse");


    if(!input || !response) return;



    const command =
    input.value.toLowerCase().trim();



    let answer = "";



    if(command.length === 0){

        answer = "🤖 Please ask Alpha something.";

    }



    else if(
        command.includes("hello") ||
        command.includes("hi") ||
        command.includes("hey") ||
        command.includes("good morning")
    ){

        answer =
        "👋 Hello! I am Infinity Alpha. How can I help you today?";

    }



    else if(
        command.includes("balance") ||
        command.includes("money") ||
        command.includes("finance")
    ){


        let income = 0;
        let expenses = 0;


        if(typeof alphaFinance !== "undefined"){

            alphaFinance.forEach(item => {

                if(item.category === "Income"){

                    income += item.amount;

                } else {

                    expenses += item.amount;

                }

            });

        }


        let balance = income - expenses;


        answer =
        "💰 Your current balance is $" 
        + balance.toFixed(2);

    }



    else if(
        command.includes("task")
    ){

        let total = 0;


        if(typeof alphaTasks !== "undefined"){

            total = alphaTasks.length;

        }


        answer =
        "✅ You currently have "
        + total
        + " tasks in Alpha.";

    }



    else if(
        command.includes("note")
    ){

        answer =
        "📝 Smart Notes is ready. Capture your ideas anytime.";

    }



    else if(
        command.includes("focus") ||
        command.includes("pomodoro")
    ){

        answer =
        "⏱️ Start a Pomodoro session and focus for 25 minutes.";

    }



    else if(
        command.includes("time")
    ){

        answer =
        "🕒 Current time is "
        + new Date().toLocaleTimeString();

    }



    else {

        answer =
        "🤖 I am still learning. Try asking about balance, tasks, notes, focus, or time.";

    }



    response.innerHTML = answer;


    input.value = "";


    console.log(
        "Alpha Command:",
        command
    );


};
