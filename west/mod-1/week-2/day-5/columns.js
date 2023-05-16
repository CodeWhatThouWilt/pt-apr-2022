const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// right to left / top to bottom
// top to bottom / right to left

for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];

    for (let j = 0; j < subArr.length; j++) {
        console.log(arr[j][i])
    }
}