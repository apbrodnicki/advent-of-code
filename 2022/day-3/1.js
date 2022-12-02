const fs = require('fs');
const readline = require('readline');

const read = readline.createInterface({
	input: fs.createReadStream('input.txt'),
});

read.on('line', function (line) {});

read.on('close', function () {
	console.log();
});
