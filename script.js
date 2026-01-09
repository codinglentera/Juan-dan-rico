const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let gameSpeed = 5;
let gravity = 0.6;
let score = 0;
let gameOver = false;

// Player
const player = {
    x: 80,
    y: 300,
    width: 40,
    height: 60,
    velocityY: 0,
    jumping: false
};

// Obstacle
let obstacles = [];

function drawPlayer() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawObstacles() {
    ctx.fillStyle = "red";
    obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });
}

function updatePlayer() {
    player.velocityY += gravity;
    player.y += player.velocityY;

    if (player.y > 300) {
        player.y = 300;
        player.jumping = false;
    }
}

function createObstacle() {
    const height = Math.random() * 40 + 40;
    obstacles.push({
        x: canvas.width,
        y: 360 - height,
        width: 40,
        height: height
    });
}

function updateObstacles() {
    obstacles.forEach(obs => obs.x -= gameSpeed);
    obstacles = obstacles.filter(obs => obs.x + obs.width > 0);
}

function checkCollision() {
    obstacles.forEach(obs => {
        if (
            player.x < obs.x + obs.width &&
            player.x + player.width > obs.x &&
            player.y < obs.y + obs.height &&
            player.y + player.height > obs.y
        ) {
            gameOver = true;
        }
    });
}

function drawGround() {
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 360, canvas.width, 40);
}

function updateScore() {
    score++;
    document.getElementById("score").innerText = "Skor: " + score;
}

function gameLoop() {
    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "40px Arial";
        ctx.fillText("GAME OVER", 260, 200);
        ctx.font = "20px Arial";
        ctx.fillText("Refresh untuk main lagi", 270, 240);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGround();
    drawPlayer();
    drawObstacles();

    updatePlayer();
    updateObstacles();
    checkCollision();
    updateScore();

    requestAnimationFrame(gameLoop);
}

// Lompat
document.addEventListener("keydown", e => {
    if (e.code === "Space" && !player.jumping) {
        player.velocityY = -12;
        player.jumping = true;
    }
});

// Spawn rintangan
setInterval(createObstacle, 1500);

gameLoop();const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let gameSpeed = 5;
let gravity = 0.6;
let score = 0;
let gameOver = false;

// Player
const player = {
    x: 80,
    y: 300,
    width: 40,
    height: 60,
    velocityY: 0,
    jumping: false
};

// Obstacle
let obstacles = [];

function drawPlayer() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawObstacles() {
    ctx.fillStyle = "red";
    obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });
}

function updatePlayer() {
    player.velocityY += gravity;
    player.y += player.velocityY;

    if (player.y > 300) {
        player.y = 300;
        player.jumping = false;
    }
}

function createObstacle() {
    const height = Math.random() * 40 + 40;
    obstacles.push({
        x: canvas.width,
        y: 360 - height,
        width: 40,
        height: height
    });
}

function updateObstacles() {
    obstacles.forEach(obs => obs.x -= gameSpeed);
    obstacles = obstacles.filter(obs => obs.x + obs.width > 0);
}

function checkCollision() {
    obstacles.forEach(obs => {
        if (
            player.x < obs.x + obs.width &&
            player.x + player.width > obs.x &&
            player.y < obs.y + obs.height &&
            player.y + player.height > obs.y
        ) {
            gameOver = true;
        }
    });
}

function drawGround() {
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 360, canvas.width, 40);
}

function updateScore() {
    score++;
    document.getElementById("score").innerText = "Skor: " + score;
}

function gameLoop() {
    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "40px Arial";
        ctx.fillText("GAME OVER", 260, 200);
        ctx.font = "20px Arial";
        ctx.fillText("Refresh untuk main lagi", 270, 240);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGround();
    drawPlayer();
    drawObstacles();

    updatePlayer();
    updateObstacles();
    checkCollision();
    updateScore();

    requestAnimationFrame(gameLoop);
}

// Lompat
document.addEventListener("keydown", e => {
    if (e.code === "Space" && !player.jumping) {
        player.velocityY = -12;
        player.jumping = true;
    }
});

// Spawn rintangan
setInterval(createObstacle, 1500);

gameLoop();
