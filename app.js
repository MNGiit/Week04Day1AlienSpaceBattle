let gameOver = false;

let enemyShips = [];
let numberOfEnemyShips = 6;
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
// for loop for alien ships

for(let i = 0; i < numberOfEnemyShips; i++) {
    let enemyHull = Math.floor(Math.random() * 4 + 3);
    let enemyFirepower = Math.floor(Math.random() * 3 + 2);
    // let enemyAccuracy = Math.random() * 0.2 + 0.6009;
    // let enemyAccuracy = (Math.floor(Math.random() * 80 + 20))/100;
    let enemyAccuracy = (Math.floor(Math.random() * 3 + 6))/10;

    console.log(enemyAccuracy);
    let enemyShip = new Ship("Alien Mothership", enemyHull, enemyFirepower, enemyAccuracy);
    enemyShips.push(enemyShip);
}

// let gameOver = false;

// while(!gameOver) {
//     if(playerShip.hull > 0) playerShip.attackShip(enemyShips[0]);
//     else gameOver = true;
// }

// enemy = enemyShips[0]
let enemy = enemyShips[0];
// round checks if player is alive
// if player isn't alive, it is game over
if(player.hull > 0) {
    console.log("player is alive");
    if(enemy.hull > 0) console.log("enemy is alive");
    else console.log("enemy is dead, prompt player with a choice to continue or not");
}

const checkRound = () => {
    if(player.isDead()) {
        console.log("Player loses.");
        gameOver = true;
        console.log("Game over is:", gameOver);
    }
    else if(enemy.isDead()) {
        console.log("Enemy loses.")
        gameOver = true;
        console.log("Game over is:", gameOver);
    }
    else {
        console.log("Both the player and enemy are active");
    }
}

const gameRound = () => {
    while(gameOver === false) {
        // player.hull--; // works
        // enemy.hull--; // works
        // NEED OTHER STUFF OR ELSE IT WILL GO ON FOREVEEEEEEEEEEEEEEEEER

        // player attacks first
        player.attackShip(enemy);
        // if the ship survives, ship attacks next
        if(!enemy.isDead()) enemy.attackShip(player);
        // if player survives, continue to next round
        checkRound();
    }
}

const game = () => {
    console.log(enemyShips);
    for(let i = 0; i < enemyShips; i++) {
        console.log("Inside for loop, i:", i);
        console.log("Inside for loop, enemy:", enemy)
        console.log("Inside for loop, gameOver:", gameOver)
        enemy = enemyShips[0];
        console.log(enemy);
        gameRound();
        console.log("Inside for loop, gameOver after gameRound():", gameOver)
    }
    console.log("Finished for loop for gameRound(), enemyShips:", enemyShips)
}

const continueAttack = () => {
    alert("Player moves on to the next alien ship.");
}

const retreat = () => {
    alert("Player retreats. Game is over.");
}

// const GAMEROUND = document.getElementByClassName("gameRoundInfo")
let round = document.querySelector(".gameRoundInfo")
round.innerHTML = 9001;