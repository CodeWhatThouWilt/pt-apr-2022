// Given the array friends below, use the Array.filter() method to 
// filter the array to only contain friends whose name starts with an "A" 
// and who has been friends for over 5 years. Then print the filtered array.

const friends = [
    {
        name: "Albert",
        yearsOfFriendship: 3
    },
    {
        name: "Angela",
        yearsOfFriendship: 2
    },
    {
        name: "Freddy",
        yearsOfFriendship: 8
    },
    {
        name: "Agatha",
        yearsOfFriendship: 6
    }
];

const filteredResult = friends.filter(friend => {
    const name = friend.name;
    const years = friend["yearsOfFriendship"];
    return name[0] === "A" && years > 5
})

console.log(filteredResult);
/*
Should print:
[
    {
        name: "Agatha",
        yearsOfFriendship: 6
    }
];
*/
