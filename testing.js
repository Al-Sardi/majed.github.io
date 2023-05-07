
let startBtn = document.querySelector('#startbutton');
let ctwo = document.getElementById('content-two');
let ctwoh = document.getElementById('content-two-h');
let heading = document.getElementById('page-heading');

let summandEins = document.getElementsByName('summand')[0].value;
let summandZwei = document.getElementsByName('summand')[1].value;
let summe = document.getElementById('summe');
let zahl;

startBtn.onclick = () => {
    const name = prompt("Wie heißt du?");
    alert(`Herzlich Willkommen ${name}`);
    document.getElementById('startbutton').style.display = "none";
    
    ctwo.style.display = "block";
    ctwo.style.alignItems = "center";
    heading.textContent = name;
    ctwoh.textContent = `Hallo ${name}`;

    zahl = summandEins + summandZwei;
    summe.innerHTML = zahl;
}
