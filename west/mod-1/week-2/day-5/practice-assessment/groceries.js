// You are compiling a price checker for a grocery store. 
// The grocery prices are as follows:

// butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5

// First, create a function called costOfGroceries(groceries) which 
// takes a single array of grocery items and returns the total cost.

// Then, write a function mostExpensiveGroceries(groceriesList) 
// that takes in a 2-dimensional array of grocery items and returns the 
// index of the sub-array with the highest cost.


// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5


function costOfGroceries(groceries) {
    // Your code here
    let totalCost = 0;

    for (let i = 0; i < groceries.length; i++) {
        const currGroc = groceries[i];
        
        if (currGroc === 'butter') totalCost += 1 // totalCost = totalCost + 1
        if (currGroc === "eggs") totalCost += 2;
        if (currGroc === 'milk') totalCost += 3;
        if (currGroc === "bread") totalCost += 4;
        if (currGroc === "cheese") totalCost += 5;
    }
    return totalCost;
}


function mostExpensiveGroceries(groceriesList) {
    // Your code here
    let highestTotal = 0;
    let highestIndex = 0;

    // Begin iterating through lists to find out total of each list
    for (let i = 0; i < groceriesList.length; i++) {
        // Select current list in our loop
        const currList = groceriesList[i];
        // Use function above to get total sum of groceries in our currList
        const currTotal = costOfGroceries(currList);

        // If sum from currList is higher than current highestTotal then redefine
        // highest variables to currTotal and index from for loop
        if (currTotal > highestTotal) {
            highestTotal = currTotal;
            highestIndex = i;
        }
    }
    return highestIndex;
}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]); // 1

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");