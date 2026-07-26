// ==========================================
// 🌐 INFINITY ALPHA X
// LIVE SYSTEM ENGINE v1.0
// ==========================================


console.log("🌐 Alpha Live Engine Loading...");


const AlphaLive = {


    status:"ONLINE",


    events:{},



    init(){


        console.log(
            "🟢 Alpha Live Engine Online"
        );


        this.connect();


    },




    connect(){


        window.dispatchEvent(

            new CustomEvent(
                "alpha-ready",
                {
                    detail:{
                        message:
                        "Alpha systems connected"
                    }
                }
            )

        );


    },





    listen(event,callback){


        window.addEventListener(

            event,

            callback

        );


    },





    send(event,data){


        window.dispatchEvent(

            new CustomEvent(

                event,

                {
                    detail:data
                }

            )

        );


    }



};




window.AlphaLive = AlphaLive;



document.addEventListener(

"DOMContentLoaded",

()=>{

    AlphaLive.init();

}

);
