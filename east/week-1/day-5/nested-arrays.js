const arr = [
    ['a', 'b', 'c'], 
    ['d', 'e', 'f'], 
    ['g', 'h', 'i']
];

for (let i = 0; i < arr.length; i++) {
    const currArr = arr[i];
    console.log('CURRENT ARRAY: ', currArr)

    for (let j = 0; j < currArr.length; j++) {
        const currString = currArr[j]
        console.log('   CURRENT STRING: ', currString)
    }
}

