// =================================================
// 🧠 INFINITY ALPHA X
// ALPHA CORE ENGINE v1.0
// =================================================


console.log("🧠 Alpha Core Loading...");


const AlphaCore = {


    version:"1.0",


    user:{


        name:"VA",


        country:"Philippines",


        currency:"USD",


        temperature:"Celsius",


        timeFormat:"24 Hour"


    },



    systems:{


        finance:false,

        weather:false,

        tasks:false,

        notes:false,

        focus:false,

        ai:true


    },



    data:{


        netWorth:0,


        income:0,


        expenses:0,


        tasks:0,


        notes:0


    },





    init(){


        console.log(
            "🚀 Alpha Core Online"
        );


        this.loadSettings();


        this.connectSystems();


        this.updateInterface();


    },





    loadSettings(){


        const saved =

        localStorage.getItem(
            "alphaSettings"
        );


        if(saved){


            this.user =

            JSON.parse(saved);


            console.log(
                "🌍 Settings Loaded",
                this.user
            );


        }


    },





    saveSettings(){


        localStorage.setItem(

            "alphaSettings",

            JSON.stringify(this.user)

        );


        console.log(
            "💾 Alpha Settings Saved"
        );


    },





    connectSystems(){


        console.log(
            "🔗 Connecting Alpha Modules..."
        );



        if(typeof Finance !== "undefined"){


            this.systems.finance=true;


        }



        if(typeof Weather !== "undefined"){


            this.systems.weather=true;


        }



        if(typeof Tasks !== "undefined"){


            this.systems.tasks=true;


        }



        if(typeof Notes !== "undefined"){


            this.systems.notes=true;


        }



        console.log(
            "🧠 Systems:",
            this.systems
        );


    },





    setCurrency(currency){


        this.user.currency=currency;


        this.saveSettings();


        this.updateInterface();


    },





    formatMoney(amount){


        return new Intl.NumberFormat(

            "en-US",

            {

                style:"currency",

                currency:this.user.currency

            }


        ).format(amount);


    },





    updateInterface(){


        const money =

        document.getElementById(
            "netWorth"
        );



        if(money){


            money.innerHTML =

            this.formatMoney(
                this.data.netWorth
            );


        }



        const currency =

        document.getElementById(
            "baseCurrency"
        );



        if(currency){


            currency.value =

            this.user.currency;


        }


    },





    status(){


        return {


            version:this.version,


            user:this.user,


            systems:this.systems,


            data:this.data


        };


    }


};





window.AlphaCore = AlphaCore;





document.addEventListener(

"DOMContentLoaded",

()=>{


    AlphaCore.init();


}

);

