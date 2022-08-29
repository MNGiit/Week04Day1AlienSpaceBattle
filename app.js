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
}

let playerShip = new Ship();
// for loop for alien ships

for(let i = 0; i < numberOfEnemyShips; i++) {
    let enemyShip = new Ship("Mothership");
    enemyShips.push(enemyShip);
}

console.log(enemyShips);

