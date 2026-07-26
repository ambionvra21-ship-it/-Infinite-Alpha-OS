// ==========================================
// 💬 Alpha Interface v2
// ==========================================

console.log("💬 Alpha Interface Online");

window.askAlpha = async function(){

    const input =
    document.getElementById("alphaCommandInput");

    const output =
    document.getElementById("alphaAssistantResponse");

    if(!input || !output) return;

    const question =
    input.value.trim();

    if(question==="") return;

    output.innerHTML =
    "🤖 Alpha is thinking...";

    const reply =
    await Alpha.ask(question);

    output.innerHTML =
    reply;

    input.value="";

};

document.addEventListener("DOMContentLoaded",()=>{

    const input =
    document.getElementById("alphaCommandInput");

    if(!input) return;

    input.addEventListener("keydown",(e)=>{

        if(e.key==="Enter"){

            askAlpha();

        }

    });

});
