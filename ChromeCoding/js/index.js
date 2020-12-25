const title = document.querySelector("#title");

const ClICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(ClICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();

