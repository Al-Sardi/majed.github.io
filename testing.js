
let HEADING = document.getElementById('page-heading');
let preMain = document.getElementById('preMain');
let BODY = document.body;
let MAIN = document.getElementById('main');
let BTN = document.getElementById('startbutton');
BTN.addEventListener("click", () => {
    const NAME = prompt("Wie heißt du?");
    HEADING.textContent = `Hallo ${NAME}`;
    BTN.style.display = "none";
    MAIN.style.display = "block";
});

let changeBgBtn = document.querySelector('#change-bg-color');
let i = 0;
function changeBg() {
    let colors = [  
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#008000",
    "#0000FF",
    "#4B0082",
    "#EE82EE",
    "#FF00FF",
    "#00FFFF",
    "#000000",
    "#FFFFFF"];
    if (i === colors.length){
        i = 0;
    }
    BODY.style.backgroundColor = colors[i];
    i++;
}
changeBgBtn.addEventListener("click", changeBg);

let changeColorBtn = document.querySelector('#change-color');
let j = 0;
function changeColor() {
    let colors = [  
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#008000",
    "#0000FF",
    "#4B0082",
    "#EE82EE",
    "#FF00FF",
    "#00FFFF",
    "#000000",
    "#FFFFFF"];
    if (j === colors.length){
        j = 0;
    }
    BODY.style.color = colors[j];
    j++;
}
changeColorBtn.addEventListener("click", changeColor);

let changeHeadingBtn = document.querySelector('#change-heading');
function changeHeading() {
    let newH = prompt("Neuer Titel: ");
    HEADING.textContent = newH;
}
changeHeadingBtn.addEventListener("click", changeHeading);