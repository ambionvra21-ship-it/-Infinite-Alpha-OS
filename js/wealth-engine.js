// ==========================================
// 💰 INFINITY ALPHA X
// WEALTH INTELLIGENCE ENGINE v1.0
// ==========================================


console.log(
    "💰 Wealth Engine Loading..."
);



const WealthEngine = {


    data:{


        income:0,


        expenses:0,


        balance:0,


        score:0


    },





    init(){


        console.log(

            "💰 Wealth Intelligence Online"

        );


        this.load();


        this.calculate();


        this.broadcast();


    },





    load(){


        const saved =

        localStorage.getItem(
            "alphaFinance"
        );



        if(saved){


            const finance =

            JSON.parse(saved);



            this.processTransactions(
                finance
            );


        }


    },





    processTransactions(transactions){


        if(!Array.isArray(transactions))

            return;



        this.data.income = 0;


        this.data.expenses = 0;



        transactions.forEach(item=>{


            const amount =

            Number(item.amount);



            if(item.category === "Income"){


                this.data.income += amount;


            }

            else{


                this.data.expenses += amount;


            }


        });


    },





    calculate(){


        this.data.balance =

        this.data.income -

        this.data.expenses;



        this.data.score =

        this.healthScore();



    },





    healthScore(){


        let score = 50;



        if(this.data.income > this.data.expenses){


            score += 30;


        }



        if(this.data.balance > 1000){


            score += 10;


        }



        if(this.data.expenses === 0){


            score += 10;


        }



        return Math.min(score,100);


    },




broadcast(){


    console.log(

        "💰 Wealth Report",

        this.data

    );



    this.updateDashboard();



    if(window.AlphaLive){


        AlphaLive.send(

            "wealth-update",

            this.data

        );


    }


},




updateDashboard(){



    const balance =

    document.getElementById(
        "wealthBalance"
    );



    const income =

    document.getElementById(
        "wealthIncome"
    );



    const expenses =

    document.getElementById(
        "wealthExpenses"
    );



    const score =

    document.getElementById(
        "wealthScore"
    );



    const status =

    document.getElementById(
        "wealthStatus"
    );





    if(balance){


        balance.innerHTML =

        new Intl.NumberFormat(

            "en-US",

            {

                style:"currency",

                currency:"USD"

            }

        ).format(
            this.data.balance
        );


    }




    if(income){


        income.innerHTML =

        "$" +

        this.data.income.toFixed(2);


    }




    if(expenses){


        expenses.innerHTML =

        "$" +

        this.data.expenses.toFixed(2);


    }




    if(score){


        score.innerHTML =

        this.data.score;


    }




    if(status){


        if(this.data.score >=80){


            status.innerHTML =

            "🟢 Financial health is strong";


        }

        else if(this.data.score >=60){


            status.innerHTML =

            "🟡 Improving financial position";


        }

        else{


            status.innerHTML =

            "🔴 Alpha recommends review";


        }


    }


}
