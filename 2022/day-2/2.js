const fs = require('fs');
const readline = require('readline');

const startTime = performance.now();

const read = readline.createInterface({
	input: fs.createReadStream('input.txt'),
});

let totalScore = 0;

read.on('line', function (line) {
	let roundScore = 0;
	line = line.split(' ');
	player1 = line[0];
	player2 = line[1];

	switch (player1) {
		case 'A':
			if (player2 === 'X') {
				roundScore += 3;
			} else if (player2 === 'Y') {
				roundScore += 4;
			} else if (player2 === 'Z') {
				roundScore += 8;
			}
			break;
		case 'B':
			if (player2 === 'X') {
				roundScore += 1;
			} else if (player2 === 'Y') {
				roundScore += 5;
			} else if (player2 === 'Z') {
				roundScore += 9;
			}
			break;
		case 'C':
			if (player2 === 'X') {
				roundScore += 2;
			} else if (player2 === 'Y') {
				roundScore += 6;
			} else if (player2 === 'Z') {
				roundScore += 7;
			}
			break;
	}

	totalScore += roundScore;
});

read.on('close', function () {
	console.log({ totalScore });
	const endTime = ((performance.now() - startTime) / 1000).toFixed(4);
	console.log('Time to run:', endTime, 'seconds');
});
