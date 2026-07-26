// ==========================================
// 🤖 INFINITY ALPHA v1.0
// Alpha Intelligence Engine
// ==========================================

console.log("🤖 Infinity Alpha Intelligence Engine Online");

const Alpha = {

    version: "1.0",

    intents: {

        weather: [
            "weather","temperature","forecast","rain","storm",
            "cloud","humidity","wind","hot","cold","umbrella","outside"
        ],

        finance: [
            "finance","money","balance","income","expense","expenses",
            "budget","saving","savings","cash","wallet","salary","pay"
        ],

        crypto: [
            "crypto","bitcoin","btc","ethereum","eth",
            "solana","xrp","doge","coin","coinbase"
        ],

        stocks: [
            "stock","stocks","share","shares",
            "nasdaq","dow","s&p","apple","tesla",
            "nvidia","amazon","microsoft","google"
        ],

        news: [
            "news","headline","breaking",
            "market news","today","update"
        ],

        currency: [
            "currency","convert","exchange",
            "usd","php","eur","jpy","gbp"
        ],

        pomodoro: [
            "pomodoro","focus","timer",
            "study","work","productive"
        ],

        notes: [
            "note","notes","remember",
            "journal","write"
        ],

        tasks: [
            "task","tasks","todo",
            "checklist","reminder"
        ],

        greeting: [
            "hello","hi","hey",
            "good morning","good afternoon",
            "good evening"
        ]
    },

    detectIntent(text){

        text = text.toLowerCase();

        for(const intent in this.intents){

            const words = this.intents[intent];

            for(const word of words){

                if(text.includes(word)){

                    return intent;

                }

            }

        }

        return "unknown";

    },

    async ask(message){

        const intent = this.detectIntent(message);

        console.log("Detected Intent:",intent);

        switch(intent){

            case "greeting":

                return `
👋 Hello!

I'm <strong>Infinity Alpha v1.0</strong>

Your Financial Intelligence &
Productivity Operating System.

How can I help today?
`;

            case "weather":

                return "🌤 Weather module loading...";

            case "finance":

                return "💰 Finance Intelligence loading...";

            case "crypto":

                return "₿ Crypto Intelligence loading...";

            case "stocks":

                return "📈 Stock Market Intelligence loading...";

            case "news":

                return "📰 News Intelligence loading...";

            case "currency":

                return "💱 Currency Intelligence loading...";

            case "pomodoro":

                return "⏱ Focus System loading...";

            case "notes":

                return "📝 Smart Notes loading...";

            case "tasks":

                return "✅ Smart Tasks loading...";

            default:

                return `
🤖 I understand many things.

Try asking me:

🌤 What's the weather?

₿ Bitcoin price

📈 Tesla stock

📰 Market news

💰 Analyze my finances

💱 Convert USD to PHP

⏱ Start Pomodoro

📝 Open notes

✅ Show tasks
`;

        }

    }

};

window.Alpha = Alpha;
