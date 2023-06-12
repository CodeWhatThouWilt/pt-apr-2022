function binaryToString(binaryBlob) {
	// const arr = [];
	let str = "";

	for (let i = 0; i < binaryBlob.length; i += 8) {
		const binary = binaryBlob.slice(i, i + 8);
		const decimal = parseInt(binary, 2);
		const newStr = String.fromCharCode(decimal);
		str += newStr;
	}
	return str;
}

/* Comment in the code below to run local tests */
// console.log(binaryToString("010000010100001001000011")); // 'ABC'
// console.log(binaryToString("001101100011011100111000")); // '678'

module.exports = binaryToString;
