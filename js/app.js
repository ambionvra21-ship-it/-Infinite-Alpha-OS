// ==========================================
// 🚀 INFINITY ALPHA APP ENGINE
// Version 0.3 Stable
// ==========================================

console.clear();

const Alpha = {

    version: "0.3",

    name: "Infinity Alpha",

    start() {

        console.log("🚀 Starting Infinity Alpha...");

        if (typeof initGreeting === "function") initGreeting();

        if (typeof initPomodoro === "function") initPomodoro();

        if (typeof initCalculator === "function") initCalculator();

        if (typeof initCurrency === "function") initCurrency();

        if (typeof initNotes === "function") initNotes();

        if (typeof initTasks === "function") initTasks();

        if (typeof initWeather === "function") initWeather();

        if (typeof initFinance === "function") initFinance();

        if (typeof initAlphaAI === "function") initAlphaAI();

        console.log("✅ Infinity Alpha Ready");

    }

};

document.addEventListener("DOMContentLoaded", () => {

    Alpha.start();

});
