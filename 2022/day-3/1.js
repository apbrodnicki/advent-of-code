const fs = require('fs');
const readline = require('readline');

const startTime = performance.now();

const read = readline.createInterface({
	input: fs.createReadStream('input.txt'),
});

read.on('line', function (line) {});

read.on('close', function () {
	console.log();
	const endTime = ((performance.now() - startTime) / 1000).toFixed(4);
	console.log('Time to run:', endTime, 'seconds');
});
