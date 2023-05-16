// In this exercise, you will learn to use the Array.find() method which will be
// useful to know. The Array.find() method accepts a callback function that
// specifies the "find" condition(s) and returns the first element that satisfies
// the condition(s). Check out the documentation here.



// Given the friends array below, use the Array.find() method to get the first 
// friend whose name contains 3 or more vowels and print their name.


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

// Hint: create an array of vowels to use in your solution.
const threeVowelFriend = friends.find(friend => {
    const vowels = 'aeiouAEIOU';
    const name = friend.name.split("");
    const filtered = name.filter((letter) => vowels.includes(letter));
    return filtered.length >= 3;
});
console.log(threeVowelFriend.name);             // Angela