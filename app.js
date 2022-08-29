let enemyShips = [];
let numberOfEnemyShips = 6;
class Ship {
    constructor(name = "USS HelloWorld", hull = 20, firepower = 5, accuracy = 0.7) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    // hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
    // firepower is the amount of damage done to the hull of the target with a successful hit
    // accuracy is the chance between 0 and 1 that the ship will hit its target
    // Your spaceship, the USS HelloWorld should have the following properties:
    // hull - 20
    // firepower - 5
    // accuracy - .7

    // The alien ships should each have the following ranged properties determined randomly:
    // hull - between 3 and 6
    // firepower - between 2 and 4
    // accuracy - between .6 and .8
    // You could be battling six alien ships each with unique values.

    // Example use of accuracy to determine a hit:
    // if (Math.random() < alien[0].accuracy) {
    //     console.log('You have been hit!');
    // }
    // enemyShip attacks playerShip
    // if(Math.random() < enemyShip.accuracy) {
    //      console.log("Enemy ship attacked Player ship successfully)
    //  else console.log("Enemy ship failed to hit Player ship")    
    // }
    attackShip() {
        let attack = Math.random();
        console.log("Attacker random number:", attack);
        if(attack < this.accuracy) console.log(`${this.name} attack was successful`)
        else console.log(`${this.name} missed!`);
    }
}

let playerShip = new Ship();
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

// console.log(enemyShips);

