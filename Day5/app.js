
function sum(newArr) {
    newArr[3] = 9
    console.log("inside", newArr[3]);
}


let arr = [1, 2, 3, 4, 5]

sum(arr)
console.log(arr);
// console.log("outside", arr[3]);