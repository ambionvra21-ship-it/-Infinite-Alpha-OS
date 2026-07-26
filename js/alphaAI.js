// ==========================================
// 🤖 INFINITY ALPHA AI ASSISTANT MODULE
// ==========================================

console.log("🤖 Alpha AI Module Loaded");



// Main Alpha Command Function
function runAlphaCommand() {


    const input = document.getElementById(
        "alphaCommandInput"
    );


    const response =
    document.getElementById(
        "alphaAssistantResponse"
    );



    if(!input || !response) return;



    const command =
    input.value.toLowerCase().trim();



    if(command === "") {

        response.textContent =
        "Please ask Alpha something.";

        return;

    }



    let answer = "";



    // Greetings
    if(
        command.includes("hello") ||
        command.includes("hi") ||
        command.includes("hey")
    ) {

        answer =
        "👋 Hello! I am Infinity Alpha. Ready to help you.";

    }



    // Productivity
    else if(
        command.includes("focus") ||
        command.includes("work")
    ) {

        answer =
        "⏱️ Start a Pomodoro session and focus on one important task.";

    }



    // Tasks
    else if(
        command.includes("task")
    ) {

        answer =
        "✅ Check your Smart Tasks dashboard and organize your priorities.";

    }



    // Finance
    else if(
        command.includes("money") ||
        command.includes("finance") ||
        command.includes("budget")
    ) {

        answer =
        "📈 Open Finance Alpha to track income, expenses, and balance.";

    }



    // Notes
    else if(
        command.includes("note")
    ) {

        answer =
        "📝 Use Smart Notes to capture your ideas and important information.";

    }



    // Time
    else if(
        command.includes("time")
    ) {

        answer =
        "🕒 Current time: " +
        new Date().toLocaleTimeString();

    }



    // Default AI Response
    else {

        answer =
        "🤖 Alpha is still learning. Try asking about tasks, finance, focus, notes, or time.";

    }



    response.textContent = answer;


    input.value = "";



    console.log(
        "Alpha Command:",
        command
    );


}
