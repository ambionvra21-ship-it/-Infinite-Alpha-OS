// ==========================================
// 📈 INFINITY ALPHA FINANCE MODULE
// ==========================================

console.log("📈 Finance Module Loaded");


let alphaFinance = JSON.parse(
    localStorage.getItem("alphaFinance")
) || [];



// Add Transaction
function addFinanceTransaction() {


    const description =
    document.getElementById("financeDescription").value;


    const amount =
    Number(document.getElementById("financeAmount").value);


    const category =
    document.getElementById("financeCategory").value;



    if(description.trim() === "" || amount <= 0) {

        alert("Please enter valid transaction details.");
        return;

    }



    const transaction = {

        id: Date.now(),

        description: description,

        amount: amount,

        category: category,

        date: new Date().toLocaleString()

    };



    alphaFinance.push(transaction);



    saveFinance();


    clearFinanceInputs();


    displayFinance();


    console.log("✅ Transaction Added");


}




// Display Transactions
function displayFinance() {


    const list =
    document.getElementById("financeList");


    if(!list) return;



    list.innerHTML = "";



    alphaFinance.forEach(item => {


        const li = document.createElement("li");


        li.innerHTML = `

        ${item.category}
        - ${item.description}
        :
        $${item.amount.toFixed(2)}

        <button onclick="deleteFinance(${item.id})">

        ❌

        </button>

        `;



        list.appendChild(li);


    });



    updateFinanceSummary();


}




// Update Totals
function updateFinanceSummary() {


    let income = 0;

    let expenses = 0;



    alphaFinance.forEach(item => {


        if(item.category === "Income") {

            income += item.amount;

        }

        else {

            expenses += item.amount;

        }


    });



    const balance = income - expenses;



    document.getElementById("totalIncome")
    .textContent =
    "$" + income.toFixed(2);



    document.getElementById("totalExpenses")
    .textContent =
    "$" + expenses.toFixed(2);



    document.getElementById("totalBalance")
    .textContent =
    "$" + balance.toFixed(2);



}




// Delete Transaction
function deleteFinance(id) {


    alphaFinance =
    alphaFinance.filter(

        item => item.id !== id

    );



    saveFinance();


    displayFinance();


}




// Save Finance Data
function saveFinance() {


    localStorage.setItem(

        "alphaFinance",

        JSON.stringify(alphaFinance)

    );


}




// Clear Inputs
function clearFinanceInputs() {


    document.getElementById("financeDescription").value = "";

    document.getElementById("financeAmount").value = "";

}




// Load Finance
window.addEventListener("load", function(){


    displayFinance();


});

// ==========================================
// 🤖 ALPHA FINANCIAL ADVISOR AI
// ==========================================

function runAlphaFinanceAI() {


    const report =
    document.getElementById("alphaFinanceReport");


    const score =
    document.getElementById("alphaFinanceScore");


    const advice =
    document.getElementById("alphaFinanceAdvice");



    if(!report || !score || !advice) {

        console.log("Finance AI elements missing");
        return;

    }



    let income = 0;

    let expenses = 0;



    alphaFinance.forEach(item => {


        if(item.category === "Income") {

            income += item.amount;

        }

        else {

            expenses += item.amount;

        }


    });



    let balance = income - expenses;



    let healthScore = 0;



    if(income > 0) {

        healthScore += 40;

    }


    if(expenses < income) {

        healthScore += 40;

    }


    if(balance > 0) {

        healthScore += 20;

    }



    report.innerHTML = `

    📊 Income:
    $${income.toFixed(2)}

    <br>

    💸 Expenses:
    $${expenses.toFixed(2)}

    <br>

    💰 Balance:
    $${balance.toFixed(2)}

    `;



    score.innerHTML =

    "Financial Health Score: " 
    + healthScore
    + "/100";



    if(healthScore >= 80) {


        advice.innerHTML =
        "🟢 Excellent! Your finances look healthy. Keep saving and investing.";


    }

    else if(healthScore >= 50) {


        advice.innerHTML =
        "🟡 Good progress. Watch your expenses and increase savings.";


    }

    else {


        advice.innerHTML =
        "🔴 Attention needed. Reduce unnecessary spending and build your income.";


    }



    console.log("🤖 Alpha Financial Analysis Complete");


}
