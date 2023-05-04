

const addNums = (num) => {
    console.log("adding to call stack...", num);
    if (num === 0) return num;
    const sum = addNums(num - 1);
    console.log("removing from call stack...", num);
    return sum + num;
}


console.log(addNums(3));