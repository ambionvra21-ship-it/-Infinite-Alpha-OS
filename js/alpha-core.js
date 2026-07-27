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


    this.memory.load();


    this.connectSystems();


    this.memory.save(

        "Alpha Core initialized"

    );


    this.updateInterface();


 console.log(

    "🤖 Alpha Briefing:",

    this.generateBriefing()

);

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




// ==============================================
// 🧠 ALPHA MEMORY SYSTEM
// ==============================================


memory:{


    history:[],


    save(event){


        this.history.push({


            event:event,


            time:new Date().toLocaleString()


        });



        localStorage.setItem(

            "alphaMemory",

            JSON.stringify(this.history)

        );


    },



    load(){


        const saved =

        localStorage.getItem(

            "alphaMemory"

        );



        if(saved){


            this.history =

            JSON.parse(saved);


        }


    }



},





// ==============================================
// 🌍 GLOBAL PROFILE SYSTEM
// ==============================================


updateProfile(setting,value){



    this.user[setting]=value;



    this.saveSettings();



    this.memory.save(

        `${setting} changed to ${value}`

    );



    this.updateInterface();


},





// ==============================================
// 💰 FINANCIAL DATA SYNC
// ==============================================


syncFinance(data){


    if(!data) return;



    this.data.income =

    data.income || 0;



    this.data.expenses =

    data.expenses || 0;



    this.data.netWorth =


    this.data.income -

    this.data.expenses;



    this.updateInterface();



},





// ==============================================
// 🤖 DAILY AI BRIEFING
// ==============================================


generateBriefing(){



    let message =



    `Good day ${this.user.name}. `;



    if(this.data.netWorth > 0){


        message +=


        `Your current balance is ${
        this.formatMoney(
        this.data.netWorth)
        }. `;


    }



    message +=


    "Alpha Core is monitoring your productivity, finance and environment.";



    return message;


},


// ==============================================
// 📊 SYSTEM REPORT
// ==============================================


report(){


    return {


        AlphaVersion:this.version,


        User:this.user,


        Systems:this.systems,


        Memory:this.memory.history.length,


        FinancialData:this.data



    };


}
