// ==========================================
// INFINITY ALPHA v0.2 STABLE
// CORE ENGINE - BATCH 1
// ==========================================

console.clear();
console.log("🚀 Infinity Alpha v0.2 Stable Booting...");

// ==========================================
// GLOBAL STATE
// ==========================================

const Alpha = {
    version: "0.2 Stable",
    weatherLoaded: false,
    notesLoaded: false,
    tasksLoaded: false
};

// ==========================================
// GREETING ENGINE
// ==========================================

function updateGreeting() {

    const title = document.getElementById("greetingTitle");
    const message = document.getElementById("greetingMessage");

    if (!title || !message) return;

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {

        title.textContent = "☀️ Good Morning";
        message.textContent = "Ready to build something amazing today?";

    }

    else if (hour >= 12 && hour < 18) {

        title.textContent = "🌤 Good Afternoon";
        message.textContent = "Keep your momentum going.";

    }

    else if (hour >= 18 && hour < 22) {

        title.textContent = "🌇 Good Evening";
        message.textContent = "Let's finish today strong.";

    }

    else {

        title.textContent = "🌙 Working Late?";
        message.textContent = "Don't forget to recharge.";

    }

}

// ==========================================
// APPLICATION STARTUP
// ==========================================

window.onload = function () {

    console.log("✅ Core Engine Started");

    updateGreeting();

};
