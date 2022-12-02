const fs = require('fs');
const readline = require('readline');

const read = readline.createInterface({
	input: fs.createReadStream('test.txt')
});

read.on('line', function(bingo) {
	binaryArray = Array.from(binaryLine, Number);

});

read.on('close', function() {

});