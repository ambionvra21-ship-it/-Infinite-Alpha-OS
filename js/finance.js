// ==========================================
// 📈 INFINITY ALPHA FINANCE MODULE
// ==========================================

console.log("📈 Finance Module Loaded");


// Load saved finance data
let alphaFinance = JSON.parse(
    localStorage.getItem("alphaFinance")
) || [];



// ==========================================
// ADD TRANSACTION
// ==========================================

window.addFinanceTransaction = function() {


    const description =
    document.getElementById("financeDescription");


    const amount =
    document.getElementById("financeAmount");


    const category =
    document.getElementById("financeCategory");



    if(!description || !amount || !category) {

        console.log("Finance inputs missing");
        return;

    }



    if(
        description.value.trim() === "" ||
        Number(amount.value) <= 0
    ){

        alert("Please enter valid transaction details.");
        return;

    }



    const transaction = {

        id: Date.now(),

        description: description.value,

        amount: Number(amount.value),

        category: category.value,

        date: new Date().toLocaleString()

    };



    alphaFinance.push(transaction);


    saveFinance();


    clearFinanceInputs();


    displayFinance();


    console.log("✅ Transaction Added");

};




// ==========================================
// DISPLAY TRANSACTIONS
// ==========================================

function displayFinance(){


    const list =
    document.getElementById("financeList");


    if(!list) return;



    list.innerHTML = "";



    alphaFinance.forEach(item => {


        const li =
        document.createElement("li");


        li.innerHTML = `

        ${item.category}
        -
        ${item.description}
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





// ==========================================
// UPDATE SUMMARY
// ==========================================

function updateFinanceSummary(){


    let income = 0;

    let expenses = 0;



    alphaFinance.forEach(item => {


        if(item.category === "Income"){

            income += item.amount;

        }

        else {

            expenses += item.amount;

        }


    });



    const balance =
    income - expenses;



    const totalIncome =
    document.getElementById("totalIncome");


    const totalExpenses =
    document.getElementById("totalExpenses");


    const totalBalance =
    document.getElementById("totalBalance");



    if(totalIncome)
    totalIncome.textContent =
    "$" + income.toFixed(2);



    if(totalExpenses)
    totalExpenses.textContent =
    "$" + expenses.toFixed(2);



    if(totalBalance)
    totalBalance.textContent =
    "$" + balance.toFixed(2);



}





// ==========================================
// DELETE TRANSACTION
// ==========================================

window.deleteFinance = function(id){


    alphaFinance =
    alphaFinance.filter(
        item => item.id !== id
    );


    saveFinance();


    displayFinance();


};





// ==========================================
// SAVE DATA
// ==========================================

function saveFinance(){


    localStorage.setItem(

        "alphaFinance",

        JSON.stringify(alphaFinance)

    );


}





// ==========================================
// CLEAR INPUTS
// ==========================================

function clearFinanceInputs(){


    const description =
    document.getElementById("financeDescription");


    const amount =
    document.getElementById("financeAmount");



    if(description)
    description.value = "";


    if(amount)
    amount.value = "";


}





// ==========================================
// 🤖 ALPHA FINANCIAL ADVISOR AI
// ==========================================

window.runAlphaFinanceAI = function(){


    const report =
    document.getElementById(
        "alphaFinanceReport"
    );


    const score =
    document.getElementById(
        "alphaFinanceScore"
    );


    const advice =
    document.getElementById(
        "alphaFinanceAdvice"
    );



    if(!report || !score || !advice){

        console.log(
        "⚠️ Advisor boxes missing"
        );

        return;

    }



    let income = 0;

    let expenses = 0;



    alphaFinance.forEach(item => {


        if(item.category === "Income"){

            income += item.amount;

        }

        else{

            expenses += item.amount;

        }


    });



    const balance =
    income - expenses;



    let healthScore = 0;



    if(income > 0)
    healthScore += 40;


    if(expenses < income)
    healthScore += 40;


    if(balance > 0)
    healthScore += 20;



    report.innerHTML = `

    💵 Income:
    $${income.toFixed(2)}

    <br>

    💸 Expenses:
    $${expenses.toFixed(2)}

    <br>

    💰 Balance:
    $${balance.toFixed(2)}

    `;



    score.innerHTML =
    "📊 Financial Health Score: "
    + healthScore
    + "/100";



    if(healthScore >= 80){

        advice.innerHTML =
        "🟢 Excellent! Your finances are healthy. Keep saving and investing.";

    }

    else if(healthScore >= 50){

        advice.innerHTML =
        "🟡 Good progress. Monitor spending and increase savings.";

    }

    else{

        advice.innerHTML =
        "🔴 Improve your budget and reduce unnecessary expenses.";

    }



    console.log(
    "🤖 Alpha Financial Advisor Complete"
    );


};





// ==========================================
// START MODULE
// ==========================================

window.addEventListener(
"load",
function(){

    displayFinance();

});
