// ==========================================
// ⏱️ MODULE 1: POMODORO FOCUS TIMER SYSTEM
// ==========================================
let pomodoroInterval;
let timeLeft = 25 * 60; // Standard 25 Minutes Session 
let isTimerRunning = false;

window.togglePomodoro = function() {
  const btn = document.getElementById('pomoStartBtn');
  if (!btn) return;

  if (isTimerRunning) {
    clearInterval(pomodoroInterval);
    btn.textContent = "Start Session";
    btn.style.backgroundColor = "#2563eb"; // Standard Blue
  } else {
    pomodoroInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updatePomodoroDisplay();
      } else {
        clearInterval(pomodoroInterval);
        alert("Time up! Take a short restorative break.");
        timeLeft = 5 * 60; // Auto-shift display to 5 minute break mode
        updatePomodoroDisplay();
      }
    }, 1000);
    btn.textContent = "Pause Session";
    btn.style.backgroundColor = "#d97706"; // Amber Warning Color
  }
  isTimerRunning = !isTimerRunning;
};

window.resetPomodoro = function() {
  clearInterval(pomodoroInterval);
  isTimerRunning = false;
  timeLeft = 25 * 60;
  updatePomodoroDisplay();
  const btn = document.getElementById('pomoStartBtn');
  if (btn) {
    btn.textContent = "Start Session";
    btn.style.backgroundColor = "#2563eb";
  }
};

function updatePomodoroDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const display = document.getElementById('pomoDisplay');
  if (display) {
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

// ==========================================
// 🔑 MODULE 2: STRONG PASSWORD GENERATOR 
// ==========================================
window.generateSecurePassword = function() {
  const length = 14;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~}{[]";
  let password = "";
  
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  
  const outputField = document.getElementById('generatedPasswordOutput');
  if (outputField) {
    outputField.value = password;
  }
};

// ==========================================
// 🛒 MODULE 3: SHOPPING DISCOUNT CALCULATOR
// ==========================================
window.calculateShoppingDiscount = function() {
  const basePrice = parseFloat(document.getElementById('shopPrice')?.value) || 0;
  const discountPercent = parseFloat(document.getElementById('shopDiscount')?.value) || 0;
  const taxPercent = parseFloat(document.getElementById('shopTax')?.value) || 0;

  const discountAmount = basePrice * (discountPercent / 100);
  const priceAfterDiscount = basePrice - discountAmount;
  const taxAmount = priceAfterDiscount * (taxPercent / 100);
  const finalTotal = priceAfterDiscount + taxAmount;

  const display = document.getElementById('shopTotalDisplay');
  if (display) {
    display.textContent = `$${finalTotal.toFixed(2)}`;
  }
};
// ==========================================
// 💱 REAL-TIME CURRENCY CONVERTER
// ==========================================

async function convertCurrency() {

    const amount = parseFloat(document.getElementById("convertAmount").value) || 0;

    const from = document.getElementById("fromCurrency").value;

    const to = document.getElementById("toCurrency").value;

    const result = document.getElementById("conversionResult");

    const rateDisplay = document.getElementById("exchangeRate");

    if (amount <= 0) {
        result.textContent = "0.00";
        rateDisplay.textContent = "Exchange Rate: --";
        return;
    }

    if (from === to) {
        result.textContent = amount.toFixed(2);
        rateDisplay.textContent = `Exchange Rate: 1 ${from} = 1 ${to}`;
        return;
    }

    result.textContent = "Loading...";
    rateDisplay.textContent = "Fetching live rate...";

    try {

        const response = await fetch(
            `https://api.frankfurter.app/latest?from=${from}&to=${to}`
        );

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

        const rate = data.rates[to];

        if (!rate) {
            throw new Error("No rate found");
        }

        const converted = amount * rate;

        result.textContent = converted.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        rateDisplay.textContent =
            `Exchange Rate: 1 ${from} = ${rate.toFixed(6)} ${to}`;

    } catch (err) {

        console.error(err);

        result.textContent = "Error";
        rateDisplay.textContent = "Unable to retrieve exchange rate";

    }
document.getElementById("convertAmount").addEventListener("input", convertCurrency);

document.getElementById("fromCurrency").addEventListener("change", convertCurrency);

document.getElementById("toCurrency").addEventListener("change", convertCurrency);

// Run once on page load
convertCurrency();
}
