const fs = require('fs');
const readline = require('readline');

const read = readline.createInterface({
	input: fs.createReadStream('test.txt')
});

let array = [];
let zeroCounter = 0;
let oneCounter = 0;

read.on('line', function(binaryLine) {
	binaryArray = binaryLine.split('');

	array.push(binaryArray);
});

read.on('close', function() {
	let oxy = [];
	let co2 = [];

	console.log(array.length);

	for (let number of binaryArray) {
		if (number === 0) {
			zeroCounter++;
		}
		else {
			oneCounter++;
		}
	}

	console.log(oxy, co2);
});