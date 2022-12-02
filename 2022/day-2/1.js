const fs = require('fs');
const readline = require('readline');

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
				roundScore += 4;
			} else if (player2 === 'Y') {
				roundScore += 8;
			} else if (player2 === 'Z') {
				roundScore += 3;
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
				roundScore += 7;
			} else if (player2 === 'Y') {
				roundScore += 2;
			} else if (player2 === 'Z') {
				roundScore += 6;
			}
			break;
	}

	totalScore += roundScore;
});

read.on('close', function () {
	console.log({ totalScore });
});
