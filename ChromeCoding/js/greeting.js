const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    EL = document.querySelector("#question");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askforName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Welecome ${text}!`; 
}

function lodeName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
     askforName();
    } else {
        paintGreeting(currentUser),
        EL.style.display = "none";
    }
}
function init() {
    lodeName();
}
init();