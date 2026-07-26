// ==========================================
// 👋 INFINITY ALPHA GREETING MODULE
// ==========================================

console.log("👋 Greeting Module Loaded");

function updateGreeting() {

    const title = document.getElementById("greetingTitle");
    const message = document.getElementById("greetingMessage");

    if (!title || !message) return;

    const hour = new Date().getHours();

    if (hour < 12) {

        title.textContent = "☀️ Good Morning";
        message.textContent = "Let's build something amazing today.";

    }

    else if (hour < 18) {

        title.textContent = "🌤 Good Afternoon";
        message.textContent = "Keep your momentum going.";

    }

    else if (hour < 22) {

        title.textContent = "🌇 Good Evening";
        message.textContent = "Finish the day strong.";

    }

    else {

        title.textContent = "🌙 Working Late?";
        message.textContent = "Remember to recharge.";

    }

}
