const fs = require('fs');
const readline = require('readline');

const startTime = performance.now();

const read = readline.createInterface({
	input: fs.createReadStream('input.txt'),
});

const alphabetMap = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 14,
	o: 15,
	p: 16,
	q: 17,
	r: 18,
	s: 19,
	t: 20,
	u: 21,
	v: 22,
	w: 23,
	x: 24,
	y: 25,
	z: 26,
};

let duplicate = '';
let priority = 0;
let prioritySum = 0;

read.on('line', function (line) {
	const halfLength = line.length / 2;
	const comp1 = line.substring(0, halfLength).split('');
	const comp2 = line.substring(halfLength).split('');

	comp1.forEach((char) => {
		if (comp2.includes(char)) {
			duplicate = char;
		}
	});

	if (duplicate === duplicate.toLowerCase()) {
		priority = alphabetMap[duplicate];
	} else {
		priority = alphabetMap[duplicate.toLowerCase()] + 26;
	}

	prioritySum += priority;
});

read.on('close', function () {
	console.log({ prioritySum });
	const endTime = ((performance.now() - startTime) / 1000).toFixed(4);
	console.log('Time to run:', endTime, 'seconds');
});
