// ==========================================
// ✅ INFINITY ALPHA SMART TASKS MODULE
// ==========================================

console.log("✅ Tasks Module Loaded");


let alphaTasks = JSON.parse(localStorage.getItem("alphaTasks")) || [];



// Add Task
function addTask() {


    const input = document.getElementById("taskInput");


    if(!input) return;


    const text = input.value.trim();



    if(text === "") {

        alert("Please enter a task.");
        return;

    }



    const task = {

        id: Date.now(),

        text: text,

        completed: false

    };



    alphaTasks.push(task);



    saveTasks();



    input.value = "";



    displayTasks();


    console.log("✅ Task Added");


}




// Display Tasks
function displayTasks() {


    const list = document.getElementById("taskList");


    if(!list) return;



    list.innerHTML = "";



    alphaTasks.forEach(task => {



        const li = document.createElement("li");



        li.innerHTML = `

        <input 
        type="checkbox"
        ${task.completed ? "checked" : ""}
        onclick="toggleTask(${task.id})">


        <span style="
        text-decoration:${task.completed ? "line-through" : "none"};
        ">

        ${task.text}

        </span>


        <button onclick="deleteTask(${task.id})">

        ❌

        </button>

        `;



        list.appendChild(li);



    });



    updateTaskProgress();



}




// Toggle Complete
function toggleTask(id) {


    alphaTasks = alphaTasks.map(task => {


        if(task.id === id) {

            task.completed = !task.completed;

        }


        return task;


    });



    saveTasks();


    displayTasks();


}




// Delete Task
function deleteTask(id) {


    alphaTasks = alphaTasks.filter(

        task => task.id !== id

    );



    saveTasks();


    displayTasks();


}




// Save Tasks
function saveTasks() {


    localStorage.setItem(

        "alphaTasks",

        JSON.stringify(alphaTasks)

    );


}




// Update Progress
function updateTaskProgress() {


    const progressText = document.getElementById("taskStats");

    const progressBar = document.getElementById("taskProgressBar");



    if(!progressText) return;



    const total = alphaTasks.length;



    const completed = alphaTasks.filter(

        task => task.completed

    ).length;



    progressText.textContent =

    `${completed} of ${total} completed`;



    if(progressBar) {


        const percent = total === 0 

        ? 0 

        : (completed / total) * 100;



        progressBar.style.width = percent + "%";


    }


}




// Load Tasks
window.addEventListener("load", function(){


    displayTasks();


});
