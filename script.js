let id=0;
function addTask(){
    let addNT = document.getElementById('inputTask').value;
    if (addNT ===""){
        alert("Please add a new task:");
    }else{
        displayTask(addNT); //display task name
        document.getElementById('inputTask').value="";//clear the input
    }
}

function deleteTask(id){
    document.getElementById(id).remove();
}

function displayTask(task){
    id++;
    document.getElementById('todoList').innerHTML+= `
    <li id="${id}">
    <div><i class="fa-solid fa-bars"></i> ${task}</div>
    <button onclick="deleteTask(${id})"><i class="fa-solid fa-trash-can"></i></button>
    </li>`;
}




