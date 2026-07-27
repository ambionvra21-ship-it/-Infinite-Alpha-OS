// ==========================================
// 📈 INFINITY ALPHA X
// CRYPTO CHART ENGINE v1.0
// ==========================================
console.log("📈 Crypto Chart Engine Online");

const CryptoChart = {
    chart: null,
    currentCoin: "bitcoin",

    init(){
        this.waitForCoins();
    },

    // Waits until MarketEngine has loaded coins, then builds the dropdown
    waitForCoins(){
        if(window.MarketEngine && MarketEngine.coins && MarketEngine.coins.length){
            this.populateSelect();
            this.loadChart(this.currentCoin);
        } else {
            setTimeout(()=> this.waitForCoins(), 800);
        }
    },

    populateSelect(){
        const select = document.getElementById("chartCoinSelect");
        if(!select) return;
        select.innerHTML = "";
        MarketEngine.coins.forEach(coin=>{
            const opt = document.createElement("option");
            opt.value = coin.id;
            opt.textContent = coin.name + " (" + coin.symbol.toUpperCase() + ")";
            select.appendChild(opt);
        });
        select.value = this.currentCoin;
        select.addEventListener("change", (e)=>{
            this.currentCoin = e.target.value;
            this.loadChart(this.currentCoin);
        });
    },

    async loadChart(coinId){
        try{
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
            );
            if(!response.ok){
                throw new Error("Unable to load chart data.");
            }
            const data = await response.json();
            const prices = data.prices; // array of [timestamp, price]
            this.render(prices, coinId);
        } catch(err){
            console.error("❌ Crypto Chart Error:", err);
        }
    },

    render(prices, coinId){
        const canvas = document.getElementById("cryptoChart");
        if(!canvas) return;

        const labels = prices.map(p=>{
            const d = new Date(p[0]);
            return d.getMonth()+1 + "/" + d.getDate();
        });
        const values = prices.map(p=> p[1]);

        const trendUp = values[values.length-1] >= values[0];
        const lineColor = trendUp ? "#22c55e" : "#ef4444";

        if(this.chart){
            this.chart.destroy();
        }

        this.chart = new Chart(canvas, {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: coinId.toUpperCase() + " price (USD)",
                    data: values,
                    borderColor: lineColor,
                    backgroundColor: lineColor + "22",
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        ticks: { color: "#94a3b8", maxTicksLimit: 7 },
                        grid: { color: "rgba(255,255,255,.05)" }
                    },
                    y: {
                        ticks: { color: "#94a3b8" },
                        grid: { color: "rgba(255,255,255,.05)" }
                    }
                }
            }
        });
    }
};

document.addEventListener("DOMContentLoaded", ()=>{
    CryptoChart.init();
});
