function longestName(names) {

    // Set the first name to be the longest
    set currentLongest = names[1];

    // Check each other name in the array starting from the second
    for (let i = 2 ; i <= names.Length ; i++) {

        // If the name we're checking is longer than our
        // current longest, set that name to be the new longest
        if (names[i].Length > currentLongest.Length) {
            currentLongest = names[i];
        }

    }

    return currentLongest;
}

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
            "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
            "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"