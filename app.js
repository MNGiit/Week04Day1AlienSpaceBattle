const ROUND = document.querySelector(".gameRoundInfo")
const SHIPSREMAINING =  document.querySelector(".shipsRemainingInfo");
const PLAYERHULL = document.querySelector(".hullInfo");

let currentRound = 0;
let gameOver = false;
let roundOver = false;

let enemyShips = [];
let numberOfEnemyShips = 6;
let currentEnemy = 0;

class Ship {
    constructor(name = "USS HelloWorld", hull = 20, firepower = 5, accuracy = 0.7) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attackShip(s) {
        if(Math.random() < this.accuracy) {this.damageShip(s)}
        else console.log(`${this.name} missed!`);
    }
    damageShip(s) {
        console.log("Attacker firepower:", this.firepower)
        console.log("Defender hull:", s.hull);
        s.hull -= this.firepower;
        console.log("Defender hull after attack:", s.hull);
    }

    isDead() {
        if(this.hull <= 0) return true;
        else return false;
    }
}

let player = new Ship();
let isPlayerAlive = true;

const createAlienShips = () => {
    for(let i = 0; i < numberOfEnemyShips; i++) {
        let enemyHull = Math.floor(Math.random() * 4 + 3);
        let enemyFirepower = Math.floor(Math.random() * 3 + 2);
        // let enemyAccuracy = Math.random() * 0.2 + 0.6009;
        // let enemyAccuracy = (Math.floor(Math.random() * 80 + 20))/100;
        let enemyAccuracy = (Math.floor(Math.random() * 3 + 6))/10;
        let enemyShip = new Ship("Alien Mothership", enemyHull, enemyFirepower, enemyAccuracy);
        enemyShips.push(enemyShip);
    }
}

// enemy = enemyShips[0]
let enemy = enemyShips[0];
// round checks if player is alive
// if player isn't alive, it is game over
// if(player.hull > 0) {
//     console.log("player is alive");
//     if(enemy.hull > 0) console.log("enemy is alive");
//     else console.log("enemy is dead, prompt player with a choice to continue or not");
// }

const checkRound = () => {
    if(player.isDead()) {
        console.log("Player loses.");
        gameOver = true;
        roundOver = true;
        console.log("Game over is:", gameOver);
        showStart();
    }
    else if(enemy.isDead()) {
        console.log("Enemy loses.");
        roundOver = true;
        console.log("Game over is:", gameOver);
        updateRemainingShips();
    }
    else {
        console.log("Both the player and enemy are active");
    }
}

const gameRound = () => {
    while(roundOver === false) {
        // player.hull--; // works
        // enemy.hull--; // works
        // NEED OTHER STUFF OR ELSE IT WILL GO ON FOREVEEEEEEEEEEEEEEEEER

        // player attacks first
        player.attackShip(enemy);
        // if the ship survives, ship attacks next
        if(!enemy.isDead()) {
            enemy.attackShip(player);
            updatePlayerHull();
        }
        // if player survives, continue to next round
        // updateGameRound();
        checkRound();
    }
    showButtons();
}

// buttons
const start = () => {
    gameOver = false;
    
    // create ships
    player = new Ship();
    createAlienShips();
    enemy = enemyShips[currentEnemy];
    numberOfEnemyShips = enemyShips.length;

    updateGameRound();
    gameRound();
}

const continueAttack = () => {
    // alert("Player moves on to the next alien ship.");
    if(currentEnemy < enemyShips.length) {
        currentEnemy++;
        enemy = enemyShips[currentEnemy];
        hideButtons();
        roundOver = false;
        updateGameRound();
        gameRound();
    }
    else console.log("There are no more enemies left!");
}

const retreat = () => {
    alert("Player retreats. Game is over.");
}

const showButtons = () => {
    document.querySelector(".continueAttack").style.display = "block";
    document.querySelector(".retreat").style.display = "block";
}

const showStart = () => {document.querySelector(".start").style.display = "block";}

const hideButtons = () => {
    document.querySelector(".continueAttack").style.display = "none";
    document.querySelector(".retreat").style.display = "none";    
}

const updateGameRound = () => {
    currentRound++;
    ROUND.innerHTML = currentRound;
}

const updateRemainingShips = () => {
    if(numberOfEnemyShips>0) {
        numberOfEnemyShips--;
        SHIPSREMAINING.innerHTML = numberOfEnemyShips;
    }
}

const updatePlayerHull = () => {PLAYERHULL.innerHTML = player.hull;}