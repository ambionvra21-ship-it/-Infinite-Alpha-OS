// ==========================================
// 🤖 INFINITY ALPHA OS
// Alpha Brain v2.0
// ==========================================

console.log("🧠 Alpha Brain v2 Online");

const Alpha = {

    version: "2.0",

    async ask(text){

        text = text.toLowerCase().trim();

        console.log("🤖 User:", text);

        // ==========================
        // Greetings
        // ==========================

        if(
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey")
        ){

            return `
👋 Hello!

Welcome back to <b>Infinity Alpha OS</b>.

Everything is online and ready.
`;

        }

        // ==========================
        // WEATHER
        // ==========================

        if(
            text.includes("weather") ||
            text.includes("temperature") ||
            text.includes("rain") ||
            text.includes("forecast")
        ){

            if(window.Weather && Weather.data){

                return `
🌤 <b>Current Weather</b>

📍 ${Weather.data.city}

🌡 ${Weather.data.temperature}°C

${Weather.data.condition}

💧 Humidity : ${Weather.data.humidity}%

🌬 Wind : ${Weather.data.wind} km/h

🕒 Updated : ${Weather.data.updated}
`;

            }

            return "Weather information is unavailable.";

        }

        // ==========================
        // FINANCE
        // ==========================

        if(
            text.includes("finance") ||
            text.includes("balance") ||
            text.includes("money") ||
            text.includes("income") ||
            text.includes("expense")
        ){

            return `
💰 Finance Module

Your financial dashboard is active.

Use the Finance widget below to
track income, expenses and balance.
`;

        }

        // ==========================
        // CRYPTO
        // ==========================

        if(
            text.includes("bitcoin") ||
            text.includes("btc") ||
            text.includes("crypto") ||
            text.includes("ethereum") ||
            text.includes("eth")
        ){

            return `
₿ Crypto Module

Live crypto dashboard
coming next.

Soon you'll see:

• Bitcoin
• Ethereum
• Solana
• XRP
• Live charts
`;

        }

        // ==========================
        // STOCKS
        // ==========================

        if(
            text.includes("stock") ||
            text.includes("tesla") ||
            text.includes("apple") ||
            text.includes("nvidia") ||
            text.includes("market")
        ){

            return `
📈 Stock Market

Live stock dashboard
coming next.

Watch:

• Apple

• Tesla

• NVIDIA

• Microsoft

• Google
`;

        }

        // ==========================
        // NEWS
        // ==========================

        if(
            text.includes("news") ||
            text.includes("headline")
        ){

            return `
📰 Financial News

News Intelligence
will be connected
after Stocks.
`;

        }

        // ==========================
        // TASKS
        // ==========================

        if(
            text.includes("task")
        ){

            return `
✅ Tasks

Task manager is online.
`;

        }

        // ==========================
        // NOTES
        // ==========================

        if(
            text.includes("note")
        ){

            return `
📝 Notes

Smart Notes is ready.
`;

        }

        // ==========================
        // POMODORO
        // ==========================

        if(
            text.includes("focus") ||
            text.includes("pomodoro")
        ){

            return `
⏱ Focus Mode

Ready for your next
25-minute session.
`;

        }

        // ==========================
        // DEFAULT
        // ==========================

        return `
🤖 Infinity Alpha

I currently understand:

🌤 Weather

💰 Finance

₿ Crypto

📈 Stocks

📰 News

📝 Notes

✅ Tasks

⏱ Pomodoro

Try asking:

"What's the weather?"

or

"Bitcoin"

`;

    }

};

window.Alpha = Alpha;
