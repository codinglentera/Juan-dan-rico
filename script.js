const board = document.getElementById("board");
const diceText = document.getElementById("dice");
const turnText = document.getElementById("turn");

const totalCells = 30;
let currentPlayer = 0;

const players = [
    { position: 0, color: "red", name: "Pemain 1 (Merah)" },
    { position: 0, color: "blue", name: "Pemain 2 (Biru)" }
];

// Buat papan
function createBoard() {
    board.innerHTML = "";
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        players.forEach(player => {
            if (player.position === i) {
                const piece = document.createElement("div");
                piece.classList.add(player.color);
                cell.appendChild(piece);
            }
        });

        board.appendChild(cell);
    }
}

function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceText.innerText = "Dadu: " + dice;

    let player = players[currentPlayer];
    player.position += dice;

    if (player.position >= totalCells - 1) {
        alert(player.name + " MENANG! 🎉");
        resetGame();
        return;
    }

    currentPlayer = (currentPlayer + 1) % players.length;
    turnText.innerText = "Giliran: " + players[currentPlayer].name;

    createBoard();
}

function resetGame() {
    players.forEach(p => p.position = 0);
    currentPlayer = 0;
    turnText.innerText = "Giliran: Pemain 1 (Merah)";
    diceText.innerText = "Dadu: -";
    createBoard();
}

createBoard();
