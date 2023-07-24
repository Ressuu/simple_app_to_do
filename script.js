let toDoList = [];
let button = document.querySelector(".btn");
let myInput = document.querySelector("#myInput");
let text = document.querySelector(".text");
let deleteButton = document.querySelector(".delete_button");
const BOX = document.querySelector(".box");
let checkBox = document.createElement("input");

button.addEventListener("click", () => {
  let inputValue = myInput.value;
  toDoList.push(inputValue);
  let newDiv = document.createElement("div");
  newDiv.textContent = inputValue;
  newDiv.classList.add("text");
  let newButton = document.createElement("button");
  newButton.textContent = "X";
  newButton.className = "delete_button";
  newDiv.appendChild(newButton);
  BOX.appendChild(newDiv);
});

BOX.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete_button")) {
    event.target.parentNode.remove();
  }
});
