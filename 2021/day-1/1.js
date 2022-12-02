const fs = require('fs');
const readline = require('readline');

const read = readline.createInterface({
	input: fs.createReadStream('input.txt'),
});

let previous = 0;
let current = 0;
let counter = 0;

read.on('line', function (line) {
	current = parseInt(line);

	if (current > previous && previous !== 0) {
		counter++;
	}

	previous = current;
});

read.on('close', function () {
	console.log(counter);
});
