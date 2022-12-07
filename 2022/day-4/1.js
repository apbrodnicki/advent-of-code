const fs = require('fs');
const readline = require('readline');

const startTime = performance.now();

const read = readline.createInterface({
	input: fs.createReadStream('input.txt'),
});

let firstSectionFirstNumber = 0;
let firstSectionLastNumber = 0;
let secondSectionFirstNumber = 0;
let secondSectionLastNumber = 0;
let counter = 0;

read.on('line', function (line) {
	const arrayLine = line.split(',');

	arrayLine.forEach((section, index) => {
		let arraySection = section.split('-');

		switch (index) {
			case 0:
				firstSectionFirstNumber = parseInt(arraySection[0]);
				firstSectionLastNumber = parseInt(arraySection[1]);
				break;
			case 1:
				secondSectionFirstNumber = parseInt(arraySection[0]);
				secondSectionLastNumber = parseInt(arraySection[1]);
				break;
		}
	});

	if (
		(secondSectionFirstNumber >= firstSectionFirstNumber &&
			secondSectionLastNumber <= firstSectionLastNumber) ||
		(firstSectionFirstNumber >= secondSectionFirstNumber &&
			firstSectionLastNumber <= secondSectionLastNumber)
	) {
		counter++;
	}
});

read.on('close', function () {
	console.log({ counter });
	const endTime = ((performance.now() - startTime) / 1000).toFixed(4);
	console.log('Time to run:', endTime, 'seconds');
});
