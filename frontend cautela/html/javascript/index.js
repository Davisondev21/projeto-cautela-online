function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    let taskItem = document.createElement("li");
    taskItem.innerHTML =
      taskInput.value +
      ' <button class=""onclick="deleteTask(this)">Apagar</button><br><br> ';
    taskList.appendChild(taskItem);
    taskInput.value = "";
  } else {
    alert("Por favor, insira uma tarefa válida.");
  }
}

function deleteTask(task) {
  task.parentNode.remove();
}

function limparFormulario() {
  document.getElementById("meuForm").reset();
}
function addoptions(elId, options) {
  // const options = sectors;

  const elSelect = document.querySelector(elId);

  console.log(elSelect);

  for (var i = 0; i < options.length; i++) {
    // criar elemento option
    var elOption = document.createElement("option");
    //criar elemento strong
    var elStrong = document.createElement("strong");
    // add conteudo do elemento strong
    elStrong.innerHTML = options[i];
    // add elemento strong dentro do option
    elOption.appendChild(elStrong);
    //add elemento option  dentro do select
    elSelect.appendChild(elOption);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  addoptions("#user-type1", sectors);
  addoptions("#user-type2", sectors);
  addoptions("#user-type3", propiedades);
});



