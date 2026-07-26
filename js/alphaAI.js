// ==========================================
// 🤖 INFINITY ALPHA AI ASSISTANT MODULE
// ==========================================

console.log("🤖 Alpha AI Module Loaded");



// Main Alpha Command
window.runAlphaCommand = function(){


    const input =
    document.getElementById(
        "alphaCommandInput"
    );


    const response =
    document.getElementById(
        "alphaAssistantResponse"
    );



    if(!input || !response){

        console.log("⚠️ Alpha AI elements missing");
        return;

    }



    const command =
    input.value.toLowerCase().trim();



    if(command === ""){

        response.textContent =
        "🤖 Please ask Alpha something.";

        return;

    }



    let answer = "";





    // =========================
    // GREETING
    // =========================

    if(
        command.includes("hello") ||
        command.includes("hi") ||
        command.includes("hey")
    ){

        answer =
        "👋 Hello! I am Infinity Alpha. Your personal productivity assistant.";

    }





    // =========================
    // TASKS
    // =========================

    else if(
        command.includes("task") ||
        command.includes("todo")
    ){

        answer =
        "✅ Open Smart Tasks. I recommend completing your highest priority task first.";

    }





    // =========================
    // NOTES
    // =========================

    else if(
        command.includes("note") ||
        command.includes("idea")
    ){

        answer =
        "📝 Smart Notes is ready. Capture your thoughts before they disappear.";

    }





    // =========================
    // FINANCE
    // =========================

    else if(
        command.includes("money") ||
        command.includes("finance") ||
        command.includes("budget")
    ){

        answer =
        "📈 Finance Alpha is monitoring your transactions. Check your Financial Advisor for analysis.";

    }





    // =========================
    // PRODUCTIVITY
    // =========================

    else if(
        command.includes("focus") ||
        command.includes("pomodoro")
    ){

        answer =
        "⏱️ Start a Pomodoro session. Focus for 25 minutes with no distractions.";

    }





    // =========================
    // TIME
    // =========================

    else if(
        command.includes("time")
    ){

        answer =
        "🕒 Current time: "
        + new Date().toLocaleTimeString();

    }





    // =========================
    // DATE
    // =========================

    else if(
        command.includes("date")
    ){

        answer =
        "📅 Today is "
        + new Date().toLocaleDateString();

    }





    // =========================
    // HELP
    // =========================

    else if(
        command.includes("help")
    ){

        answer =
        `
        🤖 Alpha Commands:

        • tasks
        • notes
        • finance
        • focus
        • time
        • date
        `;

    }





    // =========================
    // DEFAULT RESPONSE
    // =========================

    else {

        answer =
        "🤖 I am still learning. Try asking about tasks, notes, finance, focus, or time.";

    }





    response.innerHTML = answer;


    input.value = "";



    console.log(
        "Alpha Command:",
        command
    );


};
