const fs = require('fs');
const readline = require('readline');

const read = readline.createInterface({
	input: fs.createReadStream('input.txt')
});

let forward = 0;
let depth = 0;
let aim = 0;

read.on('line', function(line) {
	let splitLine = line.split(' ');
	splitLine[1] = parseInt(splitLine[1]);

	switch (splitLine[0]) {
		case 'forward':
			forward += splitLine[1];
			depth += aim * splitLine[1];
			break;
		case 'up':
			aim -= splitLine[1];
			break;
		case 'down':
			aim += splitLine[1];
			break;
	}
});

read.on('close', function() {
	console.log(forward * depth);
});