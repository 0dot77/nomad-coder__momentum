const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
}

function paintGreetings(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}`;
}

//여기부터는 local Storage의 유저 정보의 유무를 따지는 것
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    } else {
    //show the greetings
    paintGreetings(savedUsername);
}
