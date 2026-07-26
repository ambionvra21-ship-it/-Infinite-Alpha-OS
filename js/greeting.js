// ==========================================
// GREETING ENGINE
// ==========================================

function initGreeting(){

    const title =
    document.getElementById("greetingTitle");

    const message =
    document.getElementById("greetingMessage");

    if(!title || !message) return;

    const hour =
    new Date().getHours();

    if(hour < 12){

        title.innerHTML="☀️ Good Morning";

        message.innerHTML=
        "Ready to build something amazing today?";

    }

    else if(hour < 18){

        title.innerHTML="🌤 Good Afternoon";

        message.innerHTML=
        "Keep your momentum going.";

    }

    else if(hour < 22){

        title.innerHTML="🌇 Good Evening";

        message.innerHTML=
        "Let's finish today strong.";

    }

    else{

        title.innerHTML="🌙 Working Late?";

        message.innerHTML=
        "Don't forget to recharge.";

    }

}
