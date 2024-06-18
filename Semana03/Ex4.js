document.getElementById("add-task-btn").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");

    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    listItem.className = "task-item";

    listItem.addEventListener("click", function () {
      listItem.classList.toggle("done");
    });

    taskList.appendChild(listItem);

    taskInput.value = "";
  } else {
    alert("Por favor, insira uma tarefa.");
  }
});
