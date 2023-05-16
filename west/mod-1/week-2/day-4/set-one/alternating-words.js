// Write a function alternatingWords that accepts an array of words 
// as an argument. The function should mutate the input array such 
// that the words alternate between fully uppercase or lowercase. 
// The first word should be uppercase.

function alternatingWords(arr) {

    // for (let i = 0; i < arr.length; i++) {
        // if (i % 2 === 0) {
        //     arr[i] = arr[i].toUpperCase();
        // } else {
        //     arr[i] = arr[i].toLowerCase();
        // }
    // }

    let i = 0;

    while (i < arr.length) {
        if (i % 2 === 0) {
			arr[i] = arr[i].toUpperCase();
		} else {
			arr[i] = arr[i].toLowerCase();
		}
        i++
    }

}

// function alternatingWords(arr) {
// 	for (let i = 0; i < arr.length; i += 2) {
//         arr[i] = arr[i].toUpperCase();

//         if (arr[i + 1] !== undefined) {
//             arr[i + 1] = arr[i + 1].toLowerCase();
//         }
// 	}
// }

let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]