// Given the friends array, use the Array.reduce() method to get and print 
// the sum of all the years of friendship with all the friends in the array.

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

// const pplObj = friends.reduce((acc, friend) => {
//     acc[friend.name] = friend.yearsOfFriendship;
//     return acc;
// }, {});

// console.log(pplObj);

// const totalYears = friends.reduce((acc, friend) => {
//     const years = friend.yearsOfFriendship;
//     return acc + years;
// }, 0);
// console.log(totalYears);                        // 19