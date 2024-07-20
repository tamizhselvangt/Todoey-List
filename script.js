document.querySelector(".add-btn").addEventListener("click", () => {
  let input = document.querySelector("#input-box").value;
  let taskList = document.createElement("div");
  taskList.classList.add("task-list");
  randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = input;

  let deleteBtn = document.createElement("span");
  deleteBtn.classList.add("material-symbols-outlined");
  deleteBtn.innerHTML = "delete";
  deleteBtn.addEventListener("click", (e) => {
    console.log(e);
    e.target.parentNode.remove();
  });

  taskList.appendChild(task);
  taskList.appendChild(deleteBtn);
  taskList.style.backgroundColor = `#${randomColor}`;
  document.querySelector(".content").appendChild(taskList);
});
