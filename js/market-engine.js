// ==========================================
// 📈 INFINITY ALPHA X
// MARKET ENGINE v1.0
// Live Crypto Prices
// ==========================================

console.log("📈 Market Engine Online");

const MarketEngine = {

    crypto: {},

    async init(){

        console.log("🚀 Connecting to CoinGecko...");

        await this.loadCrypto();

        setInterval(()=>{

            this.loadCrypto();

        },60000); // refresh every 60 seconds

    },



    async loadCrypto(){

        try{

            const response = await fetch(

                "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"

            );

            const data = await response.json();

            this.crypto = data;

            console.log("✅ Live Crypto",data);

            this.updateDashboard();

        }

        catch(error){

            console.error("❌ Crypto Error",error);

        }

    },



    updateDashboard(){

        const btc = document.getElementById("cryptoStatus");

        const eth = document.getElementById("stockStatus");

        if(btc){

            btc.innerHTML =
                `BTC $${this.crypto.bitcoin.usd.toLocaleString()}
                <br>
                <small>${this.crypto.bitcoin.usd_24h_change.toFixed(2)}%</small>`;

        }

        if(eth){

            eth.innerHTML =
                `ETH $${this.crypto.ethereum.usd.toLocaleString()}
                <br>
                <small>${this.crypto.ethereum.usd_24h_change.toFixed(2)}%</small>`;

        }

    }

};

window.MarketEngine = MarketEngine;

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        MarketEngine.init();

    }

);

