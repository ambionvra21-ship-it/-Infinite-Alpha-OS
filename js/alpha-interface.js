// ==========================================
// 🤖 INFINITY ALPHA INTERFACE v4
// Chat Controller
// ==========================================

console.log("💬 Alpha Interface v4 Loaded");



window.askAlpha = async function(){


    const input =
    document.getElementById("alphaCommandInput");


    const response =
    document.getElementById("alphaAssistantResponse");



    if(!input || !response){

        console.log("Alpha chat elements missing");
        return;

    }



    const command =
    input.value.trim();



    response.innerHTML =
    "🤖 Alpha is thinking...";



    try{


        const answer =
        await AlphaCore.process(command);



        response.innerHTML =
        answer;


    }


    catch(error){


        console.error(error);


        response.innerHTML =
        "⚠️ Alpha encountered an error.";


    }



    input.value = "";


};
