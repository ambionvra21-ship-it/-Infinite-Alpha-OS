// ==========================================
// 🚀 INFINITY ALPHA APP ENGINE
// v0.3 PHOENIX
// ==========================================

console.log("🚀 App Engine Online.");

// ==========================================
// APPLICATION STARTUP
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Initializing Infinity Alpha...");

    // Greeting
    if (typeof updateGreeting === "function") {
        updateGreeting();
    }

    // Pomodoro
    if (typeof updatePomodoroDisplay === "function") {
        updatePomodoroDisplay();
    }

    // Notes
    if (typeof displayNotes === "function") {
        displayNotes();
    }

    // Tasks
    if (typeof renderTasks === "function") {
        renderTasks();
    }

    // Finance
    if (typeof updateFinanceDashboard === "function") {
        updateFinanceDashboard();
    }

    // Weather
    if (typeof loadWeather === "function") {
        loadWeather();
    }

    console.log("🚀 Infinity Alpha Ready.");

});
