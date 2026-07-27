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
        } catch(err){
            console.error("❌ Market Engine Error:", err);
        }
    },

    render(){
        const grid = document.getElementById("marketCenterGrid");
        if(!grid) return;
        grid.innerHTML = "";
        this.coins.forEach(coin=>{
            grid.appendChild(this.createCard(coin));
        });
        this.updateClock();
        this.generateInsight();
    },

    // PLACEHOLDER — was referenced in render() but never defined in the original file.
    // Builds a basic market tile. Replace with your real card design (market-tile / market-rank / market-spark classes already exist in your CSS).
    createCard(coin){
        const card = document.createElement("div");
        card.className = "market-tile";
        const changeClass = coin.price_change_percentage_24h >= 0 ? "market-positive" : "market-negative";
        card.innerHTML = `
            <div class="market-symbol">${coin.symbol.toUpperCase()}</div>
            <div class="market-name">${coin.name}</div>
            <div class="market-price">$${coin.current_price.toLocaleString()}</div>
            <div class="market-change ${changeClass}">${coin.price_change_percentage_24h.toFixed(2)}%</div>
        `;
        return card;
    },

    // PLACEHOLDER — was referenced in render() but never defined in the original file.
    updateClock(){
        const el = document.getElementById("marketLastUpdate");
        if(!el || !this.lastUpdated) return;
        el.textContent = "LIVE ● " + this.lastUpdated.toLocaleTimeString();
    },

    // PLACEHOLDER — was called in loadMarkets() but never defined in the original file.
    // If you have real ticker logic elsewhere (e.g. tied to #marketTicker), replace this.
    updateTicker(){
        const ticker = document.getElementById("marketTicker");
        if(!ticker || !this.coins.length) return;
        ticker.innerHTML = this.coins.map(coin => {
            const cls = coin.price_change_percentage_24h >= 0 ? "market-positive" : "market-negative";
            return `<span class="market-item">${coin.symbol.toUpperCase()} <span class="${cls}">${coin.price_change_percentage_24h.toFixed(2)}%</span></span>`;
        }).join("");
    },

    generateInsight(){
        if(!this.coins.length) return;

        const top = [...this.coins].sort(
            (a,b)=> b.price_change_percentage_24h - a.price_change_percentage_24h
        );
        const winner = top[0];
        const loser = top[top.length-1];
        const average = (
            this.coins.reduce((sum,coin)=> sum + coin.price_change_percentage_24h, 0)
            / this.coins.length
        ).toFixed(2);
        const sentiment = average>=2 ? "🟢 Bullish" : average>=0 ? "🟡 Neutral" : "🔴 Bearish";
        const panel = document.getElementById("marketInsight");
        if(!panel) return;
        panel.innerHTML = `
<ul>
<li><strong>Market Status:</strong> ${sentiment}</li>
<li><strong>Top Gainer:</strong> ${winner.symbol.toUpperCase()} ▲${winner.price_change_percentage_24h.toFixed(2)}%</li>
<li><strong>Top Loser:</strong> ${loser.symbol.toUpperCase()} ${loser.price_change_percentage_24h.toFixed(2)}%</li>
<li><strong>Average Market Change:</strong> ${average}%</li>
<li><strong>Alpha Insight:</strong> Momentum is ${average>0 ? "currently positive across major assets." : "showing weakness across leading assets."}</li>
</ul>
`;
    }
};
