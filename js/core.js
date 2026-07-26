// ==========================================
// 🤖 INFINITY ALPHA CORE v4
// Main Intelligence Engine
// ==========================================

console.log("🤖 Alpha Core v4 Online");


window.AlphaCore = {


    async process(command){

        if(!command){

            return "🤖 Please ask Alpha something.";

        }


        const input =
        command.toLowerCase().trim();



        // WEATHER

        if(
            input.includes("weather") ||
            input.includes("temperature") ||
            input.includes("rain") ||
            input.includes("forecast")
        ){

            return await this.weather();

        }



        // FINANCE

        if(
            input.includes("money") ||
            input.includes("finance") ||
            input.includes("budget") ||
            input.includes("balance")
        ){

            return await this.finance();

        }



        // POMODORO

        if(
            input.includes("focus") ||
            input.includes("pomodoro") ||
            input.includes("timer")
        ){

            return await this.pomodoro();

        }



        // MARKETS

        if(
            input.includes("crypto") ||
            input.includes("bitcoin") ||
            input.includes("stock")
        ){

            return await this.markets();

        }



        // GREETING

        if(
            input.includes("hello") ||
            input.includes("hi") ||
            input.includes("hey")
        ){

            return "👋 Hello. I am Alpha v4. Your intelligent assistant.";

        }



        return `
🤖 Alpha v4 is ready.

Try asking:
🌤 Weather
💰 Finance
⏱ Pomodoro
📈 Crypto
💱 Currency
📰 News
`;

    },


    async weather(){

        return "🌤 Weather module loading...";

    },


    async finance(){

        return "💰 Finance module loading...";

    },


    async pomodoro(){

        return "⏱ Pomodoro module loading...";

    },


    async markets(){

        return "📈 Market module loading...";

    }


};
