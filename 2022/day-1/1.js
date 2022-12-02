const fs = require('fs');
const readline = require('readline');

const read = readline.createInterface({
	input: fs.createReadStream('input.txt'),
});

let totalCalories = 0;
let highestCalories = 0;

read.on('line', function (line) {
	if (line === '') {
		if (totalCalories > highestCalories) {
			highestCalories = totalCalories;
		}

		totalCalories = 0;
		return;
	}

	line = parseInt(line);

	totalCalories += line;
});

read.on('close', function () {
	console.log({ highestCalories });
});
