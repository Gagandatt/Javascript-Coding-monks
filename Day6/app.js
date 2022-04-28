

const obj = {
    fname: "Gagan",
    lname: "Rewala",
    age: 21,
    arr: [1, 2, 3, 4, 5],
    greet: function () {
        console.log("Hello Gagan");
    },
    getFullName: function () {
        return this.fname + " " + this.lname
    }
}


const copyObj = Object.assign({}, obj)

const key = Object.keys(copyObj)
const value = Object.values(copyObj)


const entries = Object.entries(copyObj)
console.log(entries);


