// ==========================================
// 🚀 INFINITY ALPHA OS
// Application Engine v1.0
// ==========================================

console.log("🚀 Starting Infinity Alpha OS...");


window.addEventListener("DOMContentLoaded", () => {


    console.log("✅ DOM Ready");


    // Greeting
    if (typeof updateGreeting === "function") {

        updateGreeting();

        console.log("👋 Greeting Ready");

    }



    // Weather
    if (window.Weather) {

        Weather.init();

        console.log("🌤 Weather Started");

    }



    console.log(
        "🤖 Infinity Alpha OS Ready"
    );


});
