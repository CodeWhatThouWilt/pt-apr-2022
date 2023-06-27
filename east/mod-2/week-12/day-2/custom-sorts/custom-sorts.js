function ageSort(users) {
	return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
	return arr.sort((a, b) => {
		if (a % 2 === 0 && b % 2 !== 0) {
			return 1;
		}

		if (a % 2 !== 0 && b % 2 === 0) {
			return -1;
		}

		return a - b;
	});
}

function validAnagrams(s, t) {
	const arrOne = s.split("");
	const arrTwo = t.split("");

	// You can turn each letter to a charCode
	// const sortOne = arrOne.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
	// const sortTwo = arrTwo.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

	// Even easier, you can let sort just do it's thing with
	// the letters
	const sortOne = arrOne.sort();
	const sortTwo = arrTwo.sort();

	return sortOne.join("") === sortTwo.join("");
}

function reverseBaseSort(arr) {
	return arr.sort((a, b) => {
		const aDigits = a.toString().length;
		const bDigits = b.toString().length;
		if (aDigits === bDigits) {
			// a - b is ascending
			return a - b;
		} else {
			// descending order of groups
			return bDigits - aDigits;
		}
	});
}

function frequencySort(arr) {
	const obj = arr.reduce((acc, el) => {
		acc[el] ? acc[el]++ : (acc[el] = 1);
		return acc;
	}, {});

	return arr.sort((a, b) => {
		// If the frequencies are different, sort by ascending frequency
		if (obj[a] !== obj[b]) {
			return obj[a] - obj[b];
		}
		// If the frequencies are the same, sort by descending value
		else {
			return b - a;
		}
	});
}

module.exports = [
	oddEvenSort,
	validAnagrams,
	reverseBaseSort,
	frequencySort,
	ageSort,
];
