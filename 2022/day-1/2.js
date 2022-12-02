const fs = require('fs');
const readline = require('readline');

const read = readline.createInterface({
	input: fs.createReadStream('input.txt'),
});

let totalCalories = 0;
let highestCalories1 = 0;
let highestCalories2 = 0;
let highestCalories3 = 0;

read.on('line', function (line) {
	if (line === '') {
		let lowest = Math.min(
			highestCalories1,
			highestCalories2,
			highestCalories3
		);

		if (totalCalories > lowest) {
			switch (lowest) {
				case highestCalories1:
					highestCalories1 = totalCalories;
					break;
				case highestCalories2:
					highestCalories2 = totalCalories;
					break;
				case highestCalories3:
					highestCalories3 = totalCalories;
					break;
			}
		}

		totalCalories = 0;
		return;
	}

	line = parseInt(line);

	totalCalories += line;
});

read.on('close', function () {
	let lowest = Math.min(highestCalories1, highestCalories2, highestCalories3);
	if (totalCalories > lowest) {
		switch (lowest) {
			case highestCalories1:
				highestCalories1 = totalCalories;
				break;
			case highestCalories2:
				highestCalories2 = totalCalories;
				break;
			case highestCalories3:
				highestCalories3 = totalCalories;
				break;
		}
	}

	console.log(highestCalories1 + highestCalories2 + highestCalories3);
});
