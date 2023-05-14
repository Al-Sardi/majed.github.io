
let HEADING = document.getElementById('page-heading');
let preMain = document.getElementById('preMain');
let MAIN = document.getElementById('main');
let BTN = document.getElementById('startbutton');

BTN.addEventListener("click", () => {
    const NAME = prompt("Wie heißt du?");
    HEADING.textContent = `Hallo ${NAME}`;
    BTN.style.display = "none";
    MAIN.style.display = "block";
});
