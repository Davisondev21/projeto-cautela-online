function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let taskItem = document.createElement("li");
        taskItem.innerHTML = taskInput.value + ' <button  onclick="deleteTask(this)">Apagar</button>';
        taskList.appendChild(taskItem);
        taskInput.value = "";
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}

function deleteTask(task) {
    task.parentNode.remove();
}