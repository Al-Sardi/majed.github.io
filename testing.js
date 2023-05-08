
let startBtn = document.querySelector('#startbutton');
startBtn.onclick = () => {
    let ctwo = document.getElementById('content-two');
    let ctwoh = document.getElementById('content-two-h');
    let heading = document.getElementById('page-heading');

    const name = prompt("Wie heißt du?");
    startBtn.style.display = "none";
    ctwo.style.display = "block";
    ctwo.style.alignItems = "center";
    heading.textContent = name;
    ctwoh.textContent = `Hallo ${name}!`;
}

document.querySelector('#btnAddiere').onclick = () =>{
    let X = parseFloat(document.querySelector('#num-x').value);
    let Y = parseFloat(document.querySelector('#num-y').value);
    let Z = document.getElementById('num-display');
    Z.textContent = X + Y;
}
document.querySelector('#btnSubtrahiere').onclick = () =>{
    let X = parseFloat(document.querySelector('#num-x').value);
    let Y = parseFloat(document.querySelector('#num-y').value);
    let Z = document.getElementById('num-display');
    Z.textContent = X - Y;
}
document.querySelector('#btnMultipliziere').onclick = () =>{
    let X = parseFloat(document.querySelector('#num-x').value);
    let Y = parseFloat(document.querySelector('#num-y').value);
    let Z = document.getElementById('num-display');
    Z.textContent = X * Y;
}
document.querySelector('#btnDividiere').onclick = () =>{
    let X = parseFloat(document.querySelector('#num-x').value);
    let Y = parseFloat(document.querySelector('#num-y').value);
    let Z = document.getElementById('num-display');
    Z.textContent = X / Y;
}
