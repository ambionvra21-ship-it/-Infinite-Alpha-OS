// ==========================================
// 📈 INFINITY ALPHA X
// MARKET ENGINE v1.0
// Live Crypto Prices
// ==========================================
updateDashboard(){

    const btc =
    this.crypto.bitcoin;

    const eth =
    this.crypto.ethereum;

    document.getElementById("cryptoStatus").innerHTML =

    `
    <strong>BTC</strong><br>

    $${btc.usd.toLocaleString()}

    <br>

    <span class="${
        btc.usd_24h_change>=0
        ?"market-up"
        :"market-down"
    }">

    ${btc.usd_24h_change.toFixed(2)}%

    </span>
    `;



    document.getElementById("stockStatus").innerHTML=

    `
    <strong>ETH</strong><br>

    $${eth.usd.toLocaleString()}

    <br>

    <span class="${
        eth.usd_24h_change>=0
        ?"market-up"
        :"market-down"
    }">

    ${eth.usd_24h_change.toFixed(2)}%

    </span>
    `;



    const ticker =

    document.getElementById(

        "marketTicker"

    );



    if(!ticker) return;



    ticker.innerHTML = `

<div class="market-item">

₿ BTC

<strong>

$${btc.usd.toLocaleString()}

</strong>

<span class="${
btc.usd_24h_change>=0
?"market-up"
:"market-down"
}">

${btc.usd_24h_change.toFixed(2)}%

</span>

</div>

<div class="market-item">

Ξ ETH

<strong>

$${eth.usd.toLocaleString()}

</strong>

<span class="${
eth.usd_24h_change>=0
?"market-up"
:"market-down"
}">

${eth.usd_24h_change.toFixed(2)}%

</span>

</div>

<div class="market-item">

🤖 Alpha Live Markets

</div>

<div class="market-item">

Refresh 60 Seconds

</div>

`;
}
