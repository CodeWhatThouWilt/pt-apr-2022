// var (re-assignable / function scope / undefined hoist)
// const testFunc = () => {
//     console.log(hello);
// }
// testFunc();
// console.log(hello);
// var hello = 'hello';

// const (not re-assignable / block scope)

// // let (re-assignable / block scope)
// let num;
// if (true) {
//     num = 3
// }
// console.log(num);

function dogParty() {
	var dog = "Rupert";

	if (true) {
		var dog = "Fluffy";
	}

	return dog;
}

console.log(dogParty()); // ???
