// ==========================================
// 🤖 INFINITY ALPHA v4
// Unified AI Controller
// ==========================================

console.log("🤖 Infinity Alpha v4 Started");


const Alpha = {


    async ask(command){


        if(!command){

            return "🤖 Please ask me something.";

        }


        const text =
        command.toLowerCase().trim();



        if(this.detect(text,"weather")){

            return await this.weather();

        }



        if(this.detect(text,"finance")){

            return await this.finance();

        }



        if(this.detect(text,"focus")){

            return await this.focus();

        }



        if(this.detect(text,"crypto")){

            return await this.market();

        }



        if(
            text.includes("hello") ||
            text.includes("hi")
        ){

            return `
            👋 Hello.
            I am Infinity Alpha v4.
            Your intelligent workspace assistant.
            `;

        }



        return `
        🤖 I am Alpha v4.

        Available systems:

        🌤 Weather
        💰 Finance
        ⏱ Focus
        📈 Markets
        💱 Currency
        📰 News
        `;


    },



    detect(text,word){

        return text.includes(word);

    },



    async weather(){

        return "🌤 Weather intelligence online.";

    },



    async finance(){

        return "💰 Finance intelligence online.";

    },



    async focus(){

        return "⏱ Focus intelligence online.";

    },



    async market(){

        return "📈 Market intelligence online.";

    }


};

window.Alpha = Alpha;
