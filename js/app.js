// Enemies our player must avoid
var Enemy = function (y) {
    'use strict';
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // Use a random Math method to generate the speed of our ennemies via helper.js
    this.speed = getRandomInt(100, 300);
    this.x = 0;
    this.y = y;
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Adding logic to reset the placement of the ennemy when it is leaving the canvas or having a collision
    'use strict';
    if (player.y > this.y - 20 && player.y < this.y + 20 && player.x > this.x - 20 && player.x < this.x + 80) {
        player.reset();
        scorenow = 0;
        score.wipe();
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
    'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Player class initialization

var Player = function(x, y) {
    'use strict';
    this.sprite = 'images/char-boy.png';

    this.x = x;
    this.y = y;
};


Player.prototype.update = function(dt) {
    'use strict';
    this.x = this.x;
    this.y = this.y;
};

Player.prototype.render = function() {
    'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Creating a player reset event for when finish the game or lose
Player.prototype.reset = function() {
    'use strict';
    this.x = 200;
    this.y = 380;
};

Player.prototype.handleInput = function(keyPressed) {
    //Including movement and limiting the playable zone
    'use strict';
    if (keyPressed === 'left' && this.x > 0) {
        this.x = this.x - 100;
    } else if (keyPressed === 'right' && this.x < 400) {
        this.x = this.x + 100;
    } // Reset stance for when player finish the game
    else if (keyPressed === 'up' && this.y === 40) {
        player.reset();
    } else if (keyPressed === 'up' && this.y > 40) {
        this.y = this.y - 85;

    } else if (keyPressed === 'down' && this.y < 300) {
        this.y = this.y + 85;
    }

};
// Objects instanciation.
// Placing all enemy objects in an array called allEnemies
// Placing the player object in a variable called player

var player = new Player(200, 380);

// Instance Enemy in variables to manage multiple ones

var allEnemies = [];
var numberEnemies = 4;

//giving enemies a random position
var position = function() {
    'use strict';
    var nbEnemies;
    for (nbEnemies = 0; nbEnemies < numberEnemies; nbEnemies += 1) {
        allEnemies.push(new Enemy());
        //randomize y position for ennemy
        allEnemies[nbEnemies].y = getRandomYInt();
    }
};

position();


//Adding collision detection
var collision = function() {
    'use strict';
    var i;
    for (i = 0; i < allEnemies.length; i += 1) {
        if (player.x === allEnemies[i].x) { player.reset(); }
    }
};


collision();

//Initializing class for scoreboard
Score = function() {
    'use strict';
};

//Writing the content of the scoreboard in the canvas and making sure that you don't overwrite data
Score.prototype.render = function() {
    'use strict';
    ctx.clearRect(0, 0, 505, 45);
    ctx.font = "18pt 'Press Start 2P'";
    ctx.textAlign = "center";
    ctx.fillText("Score: " + scorenow, 100, 40);
};

//Keeping the current score
var scorenow = 0;

Score.prototype.wipe = function(dt) {
    'use strict';
    ctx.clearRect(0, 0, 505, 404);
};

//Adding to the score
Score.prototype.scorePlusOne = function() {
    'use strict';
    return scorenow += 1;
};

score = new Score();


//Mangaging Gem, initializing class
var Gem = function() {
    'use strict';
    this.sprite = getRandomGem();
    this.x = getRandomInt(50, 450);
    this.y = getRandomInt(50, 280);
};

Gem.prototype.render = function() {
    'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Random position of the Gem in the allocated area of the canvas
Gem.prototype.reset = function() {
    'use strict';
    this.x = getRandomInt(50, 450);
    this.y = getRandomInt(50, 280);
};


Gem.prototype.update = function(dt) {
    'use strict';
    if (player.y > this.y - 80 && player.y < this.y + 80 && player.x > this.x - 80 && player.x < this.x + 80) {
        gem.reset();
        score.wipe();
        score.scorePlusOne();

    }
    this.x = this.x;
    this.y = this.y;
};

var gem = new Gem();


// This listens for key presses and sends the keys to the
// Player.handleInput() method.
document.addEventListener('keyup', function (e) {
    'use strict';
    var allowedKeys = {

        '37': 'left',
        '38': 'up',
        '39': 'right',
        '40': 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
