const fs = require('fs');
const readline = require('readline');

const read = readline.createInterface({
	input: fs.createReadStream('input.txt')
});

let previous1 = 0;
let previous2 = 0;
let previousSum = 0;
let current = 0;
let currentSum = 0;
let counter = 0;

read.on('line', function(line) {
	current = parseInt(line);

	if (previous1 !== 0 && previous2 !== 0) {
		currentSum = current + previous1 + previous2;

		if (currentSum > previousSum && previousSum !== 0) {
			counter++;
		}

		previousSum = currentSum;
	}

	previous2 = previous1;
	previous1 = current;
});

read.on('close', function() {
	console.log(counter);
});