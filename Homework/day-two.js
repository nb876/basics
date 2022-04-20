function addSomething(a,b) {
    sum = a + b
    return sum
}

console.log(addSomething(2,3))

// 0 - declare the function
// 1 - loop through the array
// 2 - declare the variable to keep track of the trues
// 3 - check which index is true
// 4 - increment the varaible
// 5 - return the var

const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
let counter = 0
function checkTrue(arr) {
for (let i=0; i < arr.length; i++) {
    if (arr[i] === true)
    counter++
    }
    return counter
}
console.log('The number of true arrays are', checkTrue( testArray))

// function carObject({make: 'Toyota',
// model: 'Corolla',
// year: 2022,
// color: 'Green'}) {
//     return carObject.make, carObject.model
// }

// console.log(carObject())

function arrayCount(whichArray) {
    return whichArray[0]
}

console.log('The first element is', arrayCount(testArray))