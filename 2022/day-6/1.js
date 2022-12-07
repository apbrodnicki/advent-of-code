const fs = require('fs');
const readline = require('readline');

const startTime = performance.now();

const read = readline.createInterface({
	input: fs.createReadStream('input.txt'),
});

let current = [];
let finalIndex = 0;

read.on('line', function (line) {
	const array = line.split('');

	array.some((char, index) => {
		if (current.length === 4) {
			finalIndex = index;
			return true;
		}

		if (!current.includes(char)) {
			current.push(char);
		} else {
			let oldIndex = current.indexOf(char);
			current = current.slice(oldIndex + 1);
			current.push(char);
		}
	});
});

read.on('close', function () {
	console.log({ current, finalIndex });
	const endTime = ((performance.now() - startTime) / 1000).toFixed(4);
	console.log('Time to run:', endTime, 'seconds');
});
