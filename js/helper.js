//Helper file to add own functions


// Perfect random int via StackOverflow
// http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range/1527820#1527820

function getRandomInt(min, max) {
    'use strict';
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomYInt() {
    'use strict';
    var item = [50,130,215];
    return item[Math.floor(Math.random() * item.length)];
}

function getRandomGem() {
    'use strict';
    var gem = ['images/Gem Blue.png','images/Gem Green.png','images/Gem Orange.png'];
    return gem[Math.floor(Math.random() * gem.length)];
}