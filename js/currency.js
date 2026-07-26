// ==========================================
// 💱 INFINITY ALPHA CURRENCY MODULE
// ==========================================

console.log("💱 Currency Module Loaded");

async function convertCurrency() {

    const amountInput = document.getElementById("amount");
    const fromInput = document.getElementById("fromCurrency");
    const toInput = document.getElementById("toCurrency");
    const result = document.getElementById("currencyResult");

    if (!amountInput || !fromInput || !toInput || !result) return;

    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {

        result.textContent = "Please enter a valid amount.";
        return;

    }

    result.textContent = "Converting...";

    try {

        const response =
        await fetch(`https://open.er-api.com/v6/latest/${fromInput.value}`);

        const data = await response.json();

        if (!data.rates || !data.rates[toInput.value]) {

            result.textContent = "Exchange rate unavailable.";
            return;

        }

        const converted =
        amount * data.rates[toInput.value];

        result.textContent =
            `${amount.toFixed(2)} ${fromInput.value} = ${converted.toFixed(2)} ${toInput.value}`;

    }

    catch (error) {

        console.error(error);

        result.textContent =
        "Unable to connect to exchange service.";

    }

}
