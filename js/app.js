// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // Use a random Math method to generate the speed of our ennemies via helper.js

    this.speed = getRandomInt(100, 300);
    this.x = 0;
    this.y = y;
};

var collision = function() {
    for (item in allEnemies) {
        if (player.x === item.x)
            player.reset()
    }
}

collision();

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Adding logic to reset the placement of the ennemy when it is leaving the canvas or having a collision
    if (player.y > this.y - 20 && player.y < this.y + 20 && player.x > this.x - 20 && player.x < this.x + 80) {
        player.reset();
        scorenow = 0;
        score.update();
    }

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

//Creating a player reset event for when finish the game or lose
Player.prototype.reset = function() {
    this.x = 200,
        this.y = 380
}

Player.prototype.handleInput = function(keyPressed) {
        //Including movement and limiting the playable zone
        if (keyPressed === 'left' && this.x > 0) {
            this.x = this.x - 100
        } else if (keyPressed === 'right' && this.x < 400) {
            this.x = this.x + 100
        } // Reset stance for when player finish the game
        else if (keyPressed === 'up' && this.y === 40) {
            player.reset()
        } else if (keyPressed === 'up' && this.y > 40) {
            this.y = this.y - 85

        } else if (keyPressed === 'down' && this.y < 300) {
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

var Score = function() {

}

Score.prototype.render = function() {
    ctx.font = "36pt Impact";
    ctx.textAlign = "center";
    ctx.fillText("Score: " + scorenow, 80, 40);
}

var scorenow = 0;

Score.prototype.update = function(dt) {
    ctx.clearRect(0, 0, 505, 404)
}

Score.prototype.scorePlusOne = function() {
    return scorenow += 1;
}


score = new Score();

var Gem = function() {
    this.sprite = getRandomGem();
    this.x = getRandomInt(50, 450);
    this.y = getRandomInt(50, 280);
}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Gem.prototype.reset = function() {
    this.x = getRandomInt(50, 450)
    this.y = getRandomInt(50, 280)
}


Gem.prototype.update = function(dt) {
    if (player.y > this.y - 80 && player.y < this.y + 80 && player.x > this.x - 80 && player.x < this.x + 80) {
        gem.reset();
        score.update();
        score.scorePlusOne();

    }
    this.x = this.x;
    this.y = this.y;
    console.log(score);
}

var gem = new Gem();



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
