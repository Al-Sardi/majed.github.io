
document.querySelector('#btnAddiere').onclick = () =>{
    let X = parseFloat(document.querySelector('#num-x').value);
    let Y = parseFloat(document.querySelector('#num-y').value);
    let Z = document.getElementById('num-display');
    let O = document.getElementById('operator');
    O.textContent = "+";
    Z.textContent = X + Y;
}
document.querySelector('#btnSubtrahiere').onclick = () =>{
    let X = parseFloat(document.querySelector('#num-x').value);
    let Y = parseFloat(document.querySelector('#num-y').value);
    let Z = document.getElementById('num-display');
    let O = document.getElementById('operator');
    O.textContent = "-";
    Z.textContent = X - Y;
}
document.querySelector('#btnMultipliziere').onclick = () =>{
    let X = parseFloat(document.querySelector('#num-x').value);
    let Y = parseFloat(document.querySelector('#num-y').value);
    let Z = document.getElementById('num-display');
    let O = document.getElementById('operator');
    O.textContent = "x";
    Z.textContent = X * Y;
}
document.querySelector('#btnDividiere').onclick = () =>{
    let X = parseFloat(document.querySelector('#num-x').value);
    let Y = parseFloat(document.querySelector('#num-y').value);
    let Z = document.getElementById('num-display');
    let O = document.getElementById('operator');
    O.textContent = "/";
    Z.textContent = X / Y;
    }
