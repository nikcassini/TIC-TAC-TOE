let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

let players = [ "X", "O" ];
var player = players[Math.floor(Math.random() * 2)];

window.addEventListener('load', function() {
    a1.addEventListener('click', function() { btnClick(a1) })
    a2.addEventListener('click', function() { btnClick(a2) })
    a3.addEventListener('click', function() { btnClick(a3) })

    b1.addEventListener('click', function() { btnClick(b1) })
    b2.addEventListener('click', function() { btnClick(b2) })
    b3.addEventListener('click', function() { btnClick(b3) })

    c1.addEventListener('click', function() { btnClick(c1) })
    c2.addEventListener('click', function() { btnClick(c2) })
    c3.addEventListener('click', function() { btnClick(c3) })
})

function btnClick(btn) {
    btn.textContent = player;
    changePlayer();
}

function changePlayer() {
    if (player == "O") player = "X";
    else if (player == "X") player = "O";
}