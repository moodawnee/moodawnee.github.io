const todoForm = document.getElementById("todoForm");
const todoWrite = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

const savingTodos = () =>{
    const storeTodo = JSON.stringify(arrTodo);
    localStorage.setItem('todos', storeTodo);
}

const removeLi = (event)=>{
    const pLi = event.target.parentNode;
    pLi.remove();
    const xRemove = pLi.innerText.substr(0, pLi.innerText.length -1);
    arrTodo = arrTodo.filter((element) => element !== xRemove);
    savingTodos();
}

const paintTodo = (newTodo) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const xBtn = document.createElement("button");
    const span = document.createElement("span");

    checkbox.type = "checkbox";
    checkbox.name = "todos";
    li.appendChild(checkbox);

    span.innerText = newTodo;
    li.appendChild(span);
    // const textNode = document.createTextNode(newTodo);
    // li.appendChild(textNode);

    xBtn.innerText = "❌";
    li.appendChild(xBtn);
    xBtn.addEventListener("click", removeLi);

    todoList.appendChild(li);

//checkbox check시 취소선 만들기
    const changeLine = ()=>{
        if(checkbox.checked){
            span.style.textDecoration = 'line-through';
        }else{
            span.style.textDecoration = '';
        }
    }
    checkbox.addEventListener("change", changeLine);
}

let arrTodo = [];
if(localStorage.getItem('todos')){
    arrTodo = JSON.parse(localStorage.getItem('todos'));
    arrTodo.forEach((element, i) => {
        paintTodo(element);
    });
}

const handleTodoSubmit = (event) =>{
    event.preventDefault();
    const newTodo = todoWrite.value;

    arrTodo.push(newTodo);
    savingTodos();

    todoWrite.value = "";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);

//login 되었을 때 보이기
// if(!localStorage.getItem("username")){
//     todoForm.classList.add("hidden");
//     todoList.classList.add("hidden");
// }else{
//     todoForm.classList.remove("hidden");
//     todoList.classList.remove("hidden");
// }
