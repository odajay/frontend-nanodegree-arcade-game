// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // Use a random Math method to generate the speed of our ennemies via helper.js

    this.speed = getRandomInt(100, 500);
    this.x = 0;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Adding logic to reset the placement of the ennemy when it is leaving the canvas
    if (this.x < ctx.canvas.width) {
        this.x += this.speed * dt;

    } else {
        this.x = 0;
    }
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
}

Player.prototype.update = function(dt) {
    this.x = this.x;
    this.y = this.y;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keyPressed) {
        console.log(keyPressed);
        if (keyPressed === 'left') {
            this.x = this.x - 100
        } else if (keyPressed === 'right') {
            this.x = this.x + 100
        } else if (keyPressed === 'up') {
            this.y = this.y - 85
        } else if (keyPressed === 'down') {
            this.y = this.y + 85
        }
    }
    // Now instantiate your objects.
    // Place all enemy objects in an array called allEnemies
    // Place the player object in a variable called player
var player = new Player(200, 380);

// Instance Enemy in variables to manage multiple ones

var allEnemies = [];
var numberEnemies = 4;


for (var i = 0; i < numberEnemies; i++) {
    allEnemies.push(new Enemy())
        //randomize y position for ennemy
    allEnemies[i].y = this.y = getRandomYInt();
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
