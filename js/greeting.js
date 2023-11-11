const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("h1#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function handleLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(value) {
  greeting.innerText = `Hello ${value}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
