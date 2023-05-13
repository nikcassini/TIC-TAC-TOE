let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

let onTurn = document.getElementById("onTurn");
let btnNewGame = document.getElementById("btnNewGame");
let btnModalNewGame = document.getElementById("btnModalNewGame");

let players = [ "X", "O" ];
var player = players[Math.floor(Math.random() * 2)];
var paused = false;
var playCount = 0;

let gameOverModal = new bootstrap.Modal('#modalGameOver');
var gameOverText = document.getElementById("gameOverText");

let modalSettings = new bootstrap.Modal('#modalSettings');
let btnSettings = document.getElementById("btnSettings");

let btnApplyChanges = document.getElementById("btnApplyChanges");

var playerNameX = "X";
var playerNameO = "O";

window.addEventListener('load', function() {
    onTurn.textContent = player;
    document.getElementById("playerNameX").value = playerNameX;
    document.getElementById("playerNameO").value = playerNameO;

    a1.addEventListener('click', function() { btnClick(a1) })
    a2.addEventListener('click', function() { btnClick(a2) })
    a3.addEventListener('click', function() { btnClick(a3) })

    b1.addEventListener('click', function() { btnClick(b1) })
    b2.addEventListener('click', function() { btnClick(b2) })
    b3.addEventListener('click', function() { btnClick(b3) })

    c1.addEventListener('click', function() { btnClick(c1) })
    c2.addEventListener('click', function() { btnClick(c2) })
    c3.addEventListener('click', function() { btnClick(c3) })

    btnNewGame.addEventListener('click', function() { newGame() })
    btnModalNewGame.addEventListener('click', function() { newGame() })

    btnSettings.addEventListener('click', function() {
        modalSettings.show();
    })

    btnApplyChanges.addEventListener('click', function() {
        playerNameX = document.getElementById("playerNameX").value;
        playerNameO = document.getElementById("playerNameO").value;

        if (playerNameX == "") playerNameX = "X";
        if (playerNameO == "") playerNameO = "O";

        modalSettings.hide();

        if (player == "O") {
            onTurn.textContent = playerNameO;
        }
        else if (player == "X") {
            onTurn.textContent = playerNameX;
        }
    })
})

function newGame() {
    paused = false;

    playCount = 0;

    a1.textContent = a2.textContent = a3.textContent =
    b1.textContent = b2.textContent = b3.textContent =
    c1.textContent = c2.textContent = c3.textContent = "";

    player = players[Math.floor(Math.random() * 2)];
    changePlayer();
}

function btnClick(btn) {
    if (!paused) {
        if (btn.textContent == "") {
            btn.textContent = player;
            playCount++;
            checkWin();
            changePlayer();
        }
    }
}

function changePlayer() {
    if (player == "O") {
        player = "X";
        onTurn.textContent = playerNameX;
    }
    else if (player == "X") {
        player = "O";
        onTurn.textContent = playerNameO;
    }
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

    // remíza
    else if (playCount == 9) {
        draw();
    }
}

function playerWin() {
    paused = true;
    if (player == "X") gameOverText.textContent = "Player " + playerNameX + " has won the game";
    else if (player == "O") gameOverText.textContent = "Player " + playerNameO + " has won the game";
    gameOverModal.show();
}

function draw() {
    paused = true;
    gameOverText.textContent = "It's a draw.";
    gameOverModal.show();
}