//Start
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

const colorArray = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#4B0082", "#EE82EE", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", "#FFC0CB", "#FF6347", "#00FF00", "#8A2BE2", "#808080", "#FF4500", "#FFD700", "#ADFF2F", "#2E8B57", "#800000", "#FF69B4", "#CD853F", "#4B0082", "#8B008B", "#00BFFF", "#008080", "#DC143C", "#FFFF00", "#00FF7F", "#DA70D6", "#D2B48C", "#A52A2A", "#FFFACD", "#808000", "#FF1493", "#7CFC00", "#9932CC", "#FF8C00", "#BDB76B", "#FF00FF", "#6A5ACD", "#FFDAB9", "#8B0000", "#FF7F50", "#FF4500", "#00FA9A", "#8FBC8F", "#FFFAF0", "#FA8072", "#D2691E", "#C71585", "#FAEBD7", "#D3D3D3", "#FF69B4", "#FFFFE0", "#FFE4E1", "#DEB887", "#F0FFF0", "#BA55D3", "#F5DEB3", "#F0E68C", "#7FFFD4", "#FF8C69", "#EEE8AA", "#FFF0F5", "#F08080", "#87CEEB", "#9370DB", "#FFF5EE", "#E6E6FA", "#3CB371", "#B0E0E6", "#FFFAFA", "#D8BFD8", "#FFB6C1", "#FDF5E6", "#FFE4B5", "#FFDEAD", "#FAF0E6", "#FFF8DC", "#FFEBCD", "#F5F5DC", "#F8F8FF", "#F0FFFF", "#FFF0F5", "#FFFAF0", "#FDF5E6", "#FFF5EE", "#F5FFFA", "#F0F8FF", "#FAEBD7", "#FAFAD2", "#FAF0E6", "#F5DEB3", "#FFEFD5", "#FFE4C4", "#FFE4E1", "#FFF0F5", "#FFFFF0", "#F0FFF0", "#FFF5EE", "#F5FFFA", "#F0FFFF", "#FAF0E6", "#FFFACD", "#FAFAD2", "#FAEBD7", "#FFE4C4", "#FFEBCD", "#FFF0F5", "#FFFFF0", "#F0FFF0", "#F5FFFA", "#F0FFFF", "#FAF0E6", "#FFFACD", "#FAFAD2", "#FAEBD7", "#FFE4C4", "#FFEBCD", "#FFF0F5", "#FFFFF0", "#F0FFF0", "#F5FFFA", "#F0FFFF", "#FAF0E6", "#FFFACD", "#FAFAD2"];

//Change Background Color
let changeBgBtn = document.querySelector('#change-bg-color');
let i = 0;

function changeBg() {
    if (i === colorArray.length){
        i = 0;
    }
    BODY.style.backgroundColor = colorArray[i];
    i++;
}
changeBgBtn.addEventListener("click", changeBg);

//Change Font Color
let changeColorBtn = document.querySelector('#change-color');
let j = 0;
function changeColor() {
    if (j === colorArray.length){
        j = 0;
    }
    BODY.style.color = colorArray[j];
    j++;
}
changeColorBtn.addEventListener("click", changeColor);

//Change Font Size
let minusFontBtn = document.querySelector('#minus-font-size');
let plusFontBtn = document.querySelector('#plus-font-size');
let k = 15;
function plusFontSize(){
    k++;
    BODY.style.fontSize = `${k}px`;
}
function minusFontSize(){
    k--;
    BODY.style.fontSize = `${k}px`;
}
minusFontBtn.addEventListener("click", minusFontSize);
plusFontBtn.addEventListener("click", plusFontSize);

//Change Font Weight
let minusWeightBtn = document.querySelector('#minus-font-weight');
let plusWeightBtn = document.querySelector('#plus-font-weight');
let m = 100;
function plusFontWeight(){
    m += 100;
    BODY.style.fontWeight = `${m}`;
}
function minusFontWeight(){
    m -= 100;
    BODY.style.fontWeight = `${m}`;
}
minusWeightBtn.addEventListener("click", minusFontWeight);
plusWeightBtn.addEventListener("click", plusFontWeight);

//Change Header Title
let changeHeadingBtn = document.querySelector('#change-heading');
function changeHeading() {
    let newH = prompt("Neuer Titel: ");
    HEADING.textContent = newH;
}
changeHeadingBtn.addEventListener("click", changeHeading);