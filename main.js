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
    if (btn.textContent == "") btn.textContent = player;
    checkWin();
    changePlayer();
}

function changePlayer() {
    if (player == "O") player = "X";
    else if (player == "X") player = "O";
}

function checkWin() {
    // řádky
    if (a1.textContent == player && a2.textContent == player && a3.textContent == player) playerWin();
    else if (b1.textContent == player && b2.textContent == player && b3.textContent == player) playerWin();
    else if (c1.textContent == player && c2.textContent == player && c3.textContent == player) playerWin();

    // sloupce
    else if (a1.textContent == player && b1.textContent == player && c1.textContent == player) playerWin();
    else if (a2.textContent == player && b2.textContent == player && c2.textContent == player) playerWin();
    else if (a3.textContent == player && b3.textContent == player && c3.textContent == player) playerWin();

    // křížem
    else if (a1.textContent == player && b2.textContent == player && c3.textContent == player) playerWin();
    else if (a3.textContent == player && b2.textContent == player && c1.textContent == player) playerWin();

    // jiné - nevyhrál, pokračuje se dál...
}

function playerWin() {
    console.log("PLAYER: ", player, " HAS WON THE GAME.")
}