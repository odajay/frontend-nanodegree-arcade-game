//Helper file to add own functions


// Perfect random int via StackOverflow
// http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range/1527820#1527820

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomYInt() {
	var item = [50,130,215]
    return item[Math.floor(Math.random() * item.length)];
}