let player = {
  hp: 100,
  maxHp: 100,
  level: 1,
  exp: 0,
  attack: 10
};

let monster = {
  hp: 80,
  maxHp: 80,
  attack: 8
};

function updateUI() {
  document.getElementById("player-hp").textContent = player.hp;
  document.getElementById("player-level").textContent = player.level;
  document.getElementById("player-exp").textContent = player.exp;
  document.getElementById("monster-hp").textContent = monster.hp;
}

function logMessage(msg) {
  const log = document.getElementById("log");
  log.innerHTML += msg + "<br>";
  log.scrollTop = log.scrollHeight;
}

function attack() {
  if (player.hp <= 0 || monster.hp <= 0) return;

  let playerDamage = Math.floor(Math.random() * player.attack) + 5;
  monster.hp -= playerDamage;
  logMessage(`Player menyerang monster (${playerDamage} damage)`);

  if (monster.hp <= 0) {
    monster.hp = 0;
    winBattle();
    updateUI();
    return;
  }

  monsterAttack();
  updateUI();
}

function monsterAttack() {
  let monsterDamage = Math.floor(Math.random() * monster.attack) + 3;
  player.hp -= monsterDamage;
  logMessage(`Monster menyerang player (${monsterDamage} damage)`);

  if (player.hp <= 0) {
    player.hp = 0;
    logMessage("💀 Player kalah!");
  }
}

function heal() {
  if (player.hp <= 0) return;

  let healAmount = 15;
  player.hp += healAmount;
  if (player.hp > player.maxHp) player.hp = player.maxHp;

  logMessage(`Player heal +${healAmount} HP`);
  monsterAttack();
  updateUI();
}

function winBattle() {
  logMessage("🎉 Monster dikalahkan!");
  player.exp += 20;

  if (player.exp >= 100) {
    player.level++;
    player.exp = 0;
    player.maxHp += 20;
    player.attack += 5;
    player.hp = player.maxHp;
    logMessage("⬆️ Level Up!");
  }

  monster.hp = monster.maxHp;
}

function resetGame() {
  player.hp = 100;
  player.maxHp = 100;
  player.level = 1;
  player.exp = 0;
  player.attack = 10;

  monster.hp = 80;

  document.getElementById("log").innerHTML = "";
  updateUI();
}

