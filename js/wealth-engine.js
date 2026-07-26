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



        if(window.AlphaLive){


            AlphaLive.send(

                "wealth-update",

                this.data

            );


        }


    },





    report(){


        return this.data;


    }


};





window.WealthEngine = WealthEngine;





document.addEventListener(

"DOMContentLoaded",

()=>{


    WealthEngine.init();


}

);
