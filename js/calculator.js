// ==========================================
// 🧮 CALCULATOR ENGINE
// Infinity Alpha v0.3
// ==========================================

function initCalculator(){

    console.log("🧮 Calculator Engine Loaded");

}

function appendCalc(value){

    const display =
    document.getElementById("calcDisplay");

    if(!display) return;

    display.value += value;

}

function clearCalc(){

    const display =
    document.getElementById("calcDisplay");

    if(!display) return;

    display.value = "";

}

function deleteCalc(){

    const display =
    document.getElementById("calcDisplay");

    if(!display) return;

    display.value =
    display.value.slice(0,-1);

}

function calculateCalc(){

    const display =
    document.getElementById("calcDisplay");

    if(!display) return;

    try{

        display.value =
        eval(display.value);

    }

    catch{

        display.value = "Error";

    }

}
