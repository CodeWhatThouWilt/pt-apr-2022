// Given the array friends below, use the Array.forEach() method to iterate
// through each element and print the name and yearsOfFriendship properties
// stylized as "name: yearsOfFriendship years".

const friends = [
	{
		name: "Albert",
		yearsOfFriendship: 3,
	},
	{
		name: "Angela",
		yearsOfFriendship: 2,
	},
	{
		name: "Freddy",
		yearsOfFriendship: 8,
	},
	{
		name: "Agatha",
		yearsOfFriendship: 6,
	},
];

friends.forEach((obj) => {
    const name = obj.name;
    const years = obj["yearsOfFriendship"];
    console.log(name + ": " + years + " years")
});

// friends.forEach((obj) => console.log(obj.name + ": " + obj["yearsOfFriendship"] + " years"));

/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/
