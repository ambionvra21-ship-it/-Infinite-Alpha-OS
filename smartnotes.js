// ==========================================
// 📝 INFINITY ALPHA SMART NOTES MODULE
// ==========================================

console.log("📝 Notes Module Loaded");


let alphaNotes = JSON.parse(localStorage.getItem("alphaNotes")) || [];


// Save Note
function saveNote() {

    const title = document.getElementById("noteTitle").value;
    const content = document.getElementById("noteContent").value;


    if(title.trim() === "" && content.trim() === "") {

        alert("Please write something first.");
        return;

    }


    const note = {

        id: Date.now(),

        title: title,

        content: content,

        date: new Date().toLocaleString()

    };


    alphaNotes.push(note);


    localStorage.setItem(
        "alphaNotes",
        JSON.stringify(alphaNotes)
    );


    displayNotes();


    clearNote();


    console.log("✅ Note Saved");

}



// Display Notes
function displayNotes() {

    const list = document.getElementById("notesList");


    if(!list) return;


    list.innerHTML = "";


    alphaNotes.forEach(note => {


        const box = document.createElement("div");


        box.className = "note-item";


        box.innerHTML = `

        <h3>${note.title || "Untitled Note"}</h3>

        <p>${note.content}</p>

        <small>${note.date}</small>

        <br>

        <button onclick="deleteNote(${note.id})">
        Delete
        </button>

        `;


        list.appendChild(box);


    });


}



// Delete Note
function deleteNote(id) {


    alphaNotes = alphaNotes.filter(

        note => note.id !== id

    );


    localStorage.setItem(

        "alphaNotes",

        JSON.stringify(alphaNotes)

    );


    displayNotes();


}



// Clear Input
function clearNote() {


    document.getElementById("noteTitle").value = "";

    document.getElementById("noteContent").value = "";


}



// Search Notes
function searchNotes() {


    const search = document

    .getElementById("noteSearch")

    .value

    .toLowerCase();



    const list = document.getElementById("notesList");


    list.innerHTML = "";


    alphaNotes

    .filter(note =>

        note.title.toLowerCase().includes(search) ||

        note.content.toLowerCase().includes(search)

    )

    .forEach(note => {


        const box = document.createElement("div");


        box.className = "note-item";


        box.innerHTML = `

        <h3>${note.title}</h3>

        <p>${note.content}</p>

        <small>${note.date}</small>

        <br>

        <button onclick="deleteNote(${note.id})">
        Delete
        </button>

        `;


        list.appendChild(box);


    });


}



// Load Notes When Page Opens
window.addEventListener("load", function(){

    displayNotes();

});
