

const firstFunc = (num) => {
    console.log("new func on call stack with num: ", num);
    if (num === 0) return num;
    const sum = firstFunc(num - 1);
    console.log("leaving the stack with num: ", num);
    return num + sum;
}

firstFunc(5);