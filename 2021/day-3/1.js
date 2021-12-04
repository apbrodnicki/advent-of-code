const fs = require('fs');
const { addListener } = require('process');
const readline = require('readline');

const read = readline.createInterface({
	input: fs.createReadStream('input.txt')
});

let gammaRate = [];
let epsilonRate = [];
let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

read.on('line', function(binaryLine) {
	binaryArray = Array.from(binaryLine, Number);
	let index = 0;

	for (let number of binaryArray) {
		if (number === 0) {
			array[index]--;
		}
		else {
			array[index]++;
		}

		index++;
	}
});

read.on('close', function() {
	for (let number of array) {
		if (number < 0) {
			gammaRate.push(0);
			epsilonRate.push(1);
		} else {
			gammaRate.push(1);
			epsilonRate.push(0);
		}
	}

	gammaRate = gammaRate.join('');
	epsilonRate = epsilonRate.join('');

	gammaRate = parseInt(gammaRate, 2);
	epsilonRate = parseInt(epsilonRate, 2);

	console.log(gammaRate * epsilonRate);
});