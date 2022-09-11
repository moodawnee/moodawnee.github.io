const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const greetingContainer = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

const logoutBtn = document.querySelector(".logout");

function loginingIn(){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);

    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginingIn();
    greeting.innerText = `Hello ${username}`;
    localStorage.setItem(USERNAME_KEY, username);
}

if(savedUsername){
    loginingIn();
    greeting.innerText = `Hello, ${savedUsername}`;
}

const handleLogout = ()=>{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);

    todoForm.classList.add(HIDDEN_CLASSNAME);
    todoList.classList.add(HIDDEN_CLASSNAME);
}

logoutBtn.addEventListener("click", handleLogout);
loginForm.addEventListener("submit", onLoginSubmit);