// ==========================================
// 🌍 INFINITY ALPHA X
// GLOBAL MARKET ENGINE v1.1
// ==========================================

console.log("🌍 Global Market Engine Online");

const MarketEngine = {

    refreshRate: 60000,

    coins: [],

    lastUpdated: null,

    async init(){

        console.log("🚀 Connecting to CoinGecko...");

        await this.loadMarkets();

        setInterval(()=>{

            this.loadMarkets();

        },this.refreshRate);

    },



    async loadMarkets(){

        try{

            const response = await fetch(

                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"

            );

            if(!response.ok){

                throw new Error("Unable to load market data.");

            }

            this.coins = await response.json();

            this.lastUpdated = new Date();

            console.log("✅ Market Data Loaded");

            this.render();

            this.updateTicker();

        }

        catch(error){

            console.error("❌",error);

        }

    },



    render(){

        const grid =

        document.getElementById(

            "marketCenterGrid"

        );



        if(!grid) return;



        grid.innerHTML = "";



        this.coins.forEach(

            coin=>{

                grid.appendChild(

                    this.createCard(

                        coin

                    )

                );

            }

        );



        this.updateClock();

    },



    createCard(coin){

        const card =

        document.createElement("div");



        card.className="market-tile";



        const positive =

        coin.price_change_percentage_24h>=0;



        card.innerHTML = `

<div class="market-rank">

#${coin.market_cap_rank}

</div>

<div class="market-symbol">

<img
src="${coin.image}"
width="36"
height="36">

</div>

<div class="market-name">

${coin.name}

</div>

<div class="market-price">

$${coin.current_price.toLocaleString()}

</div>

<div class="market-change ${

positive

?

"market-positive"

:

"market-negative"

}">

${positive?"▲":"▼"}

${Math.abs(

coin.price_change_percentage_24h

).toFixed(2)}%

</div>

<div class="market-spark"></div>

<div class="market-footer">

<span>${coin.symbol.toUpperCase()}</span>

<span>${coin.market_cap_rank}</span>

</div>

`;

        return card;

    },



    updateClock(){

        const box=

        document.getElementById(

            "marketLastUpdate"

        );



        if(!box) return;



        box.innerHTML=

        "LIVE ● "

        +

        this.lastUpdated

        .toLocaleTimeString();

    },



    updateTicker(){

        // Batch 2

    }

};



document.addEventListener(

"DOMContentLoaded",

()=>{

MarketEngine.init();

});
