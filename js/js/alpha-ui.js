// ==========================================
// 🤖 INFINITY ALPHA v4
// User Interface Controller
// ==========================================

console.log("💬 Alpha UI v4 Loaded");



window.askAlpha = async function(){


    const input =
    document.getElementById("alphaCommandInput");


    const output =
    document.getElementById("alphaAssistantResponse");



    if(!input || !output){

        console.log("Alpha UI elements missing");
        return;

    }



    const message =
    input.value.trim();



    if(message === ""){

        output.innerHTML =
        "🤖 Please ask Alpha something.";

        return;

    }



    output.innerHTML =
    "🤖 Alpha is thinking...";



    try{


        const answer =
        await Alpha.ask(message);



        output.innerHTML =
        answer;



    }

    catch(error){


        console.error(
            "Alpha Error:",
            error
        );


        output.innerHTML =
        "⚠️ Alpha encountered an error.";

    }



    input.value = "";


};
