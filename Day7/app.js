

// let arr = [1, 2, 3, 4, 5]


// let [val1, val2, , val4, val5] = arr

// console.log(val1, val2, val4, val5);



// let User = {
//     fname: "Gagan",
//     lname: "Rewala",
//     age: 21,
//     city: "Jaipur"
// }


// let { fname: a, lname: b, age: c, city: d, state: e } = User

// console.log(a, b, c, d, e)


// function printFullName({ fname, lname, age, city }) {
//     console.log(fname, lname, age, city);

// }
// printFullName(User)


// let a = 20, b = 30;
// [a, b] = [b, a]
// console.log(a, b);

// function stat(a, b) {
//     return [a + b, a + b / 2, a - b]
// }

// let [sum, avg, diff] = stat(20, 10)

// console.log(sum, avg, diff);


// function sum(a, b, ...args, c) {
//     console.log(args);
// }

// sum(1, 2, 3, 4, 5, 6)


let arr = [1, 2, 3, 4, 5]


let newArr = [0, 7, ...arr]

console.log(newArr);
