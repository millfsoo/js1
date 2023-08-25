const input = document.querySelector("#input");
const createButton = document.querySelector("#create_button");
const todoList = document.querySelector("#todo_list");

const createTodo = () => {
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Введите запись");
    return;
  }

  const div = document.createElement("div");
  const divButton = document.createElement("div");
  const text = document.createElement("h3");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  div.setAttribute("class", "block_text");
  divButton.setAttribute("class", "div_button");
  deleteButton.setAttribute("class", "delete_button");
  editButton.setAttribute("class", "edit_button");

  text.textContent = inputValue;

  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    div.remove();
  });

  editButton.textContent = "Edit";

  divButton.append(deleteButton, editButton);
  div.append(text, divButton);

  todoList.prepend(div);

  input.value = "";
};

createButton.onclick = createTodo;
