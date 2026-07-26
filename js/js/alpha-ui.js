// ==========================================
// 🤖 ALPHA UI v1.0
// ==========================================

console.log("💬 Alpha UI Ready");

window.askAlpha = async function(){

    const input =
    document.getElementById("alphaCommandInput");

    const output =
    document.getElementById("alphaAssistantResponse");

    if(!input || !output) return;

    const question =
    input.value.trim();

    if(question===""){

        output.innerHTML =
        "🤖 Ask me something.";

        return;

    }

    output.innerHTML =
    "🤖 Thinking...";

    try{

        const reply =
        await Alpha.ask(question);

        output.innerHTML =
        reply;

    }

    catch(error){

        console.error(error);

        output.innerHTML =
        "⚠️ Alpha encountered an error.";

    }

    input.value="";

};
