const todoText = document.querySelector("#todoText");
const addbtn = document.querySelector("#addBtn");
const todolist = document.querySelector("#todoList");

addbtn.addEventListener("click", () =>{
   // alert(todoText.value);
    const listitem = document.createElement("li");
    listitem.textContent = todoText.value;
    todolist.append(listitem);
})