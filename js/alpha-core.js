// ==========================================
// 🤖 ALPHA AI CORE v2
// Main Intelligence Router
// ==========================================


window.AlphaCore = {

    process(input){

        if(!input) return "Please enter a command.";

        let message = input.toLowerCase();


        // ==========================
        // WEATHER DETECTION
        // ==========================

        if(
            message.includes("weather") ||
            message.includes("temperature") ||
            message.includes("rain") ||
            message.includes("forecast")
        ){

            return this.weatherResponse(message);

        }


        // ==========================
        // POMODORO DETECTION
        // ==========================

        if(
            message.includes("pomodoro") ||
            message.includes("timer") ||
            message.includes("focus")
        ){

            return "⏱️ Pomodoro mode detected. Opening focus timer.";

        }



        // ==========================
        // FINANCE DETECTION
        // ==========================

        if(
            message.includes("finance") ||
            message.includes("money") ||
            message.includes("budget") ||
            message.includes("expense")
        ){

            return "📊 Finance assistant activated. Preparing your analysis.";

        }



        // ==========================
        // CRYPTO / MARKET DETECTION
        // ==========================

        if(
            message.includes("crypto") ||
            message.includes("bitcoin") ||
            message.includes("stock") ||
            message.includes("market")
        ){

            return "📈 Market intelligence activated.";

        }



        // ==========================
        // GREETING
        // ==========================

        if(
            message.includes("hello") ||
            message.includes("hi") ||
            message.includes("hey")
        ){

            return "🤖 Hello. I am Alpha AI Core v2. How can I help you?";

        }



        // ==========================
        // DEFAULT RESPONSE
        // ==========================

        return `
🤖 Alpha is learning.

I can currently help with:

🌤 Weather
⏱ Pomodoro
📊 Finance
₿ Crypto & Markets

Try asking:
"What's the weather?"
"Start my timer"
"Show crypto"
`;

    },


    // ==========================
    // WEATHER MODULE PLACEHOLDER
    // ==========================

    weatherResponse(message){

        return `
🌤 Weather module detected.

I understand you are asking about weather.

Next upgrade:
Connecting Alpha to live weather API.
`;

    }


};
