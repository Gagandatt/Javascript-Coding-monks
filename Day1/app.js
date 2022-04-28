function passbyValue(a1) {
    a1 = 5;
}
let a = 15;
passbyValue(a)
console.log(a);

function passbyRef(newArr) {
    newArr[1] = 0
}
let arr = [1, 2, 3, 4, 5]
passbyRef(arr)
console.log(arr);


