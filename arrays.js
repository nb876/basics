// let cars = ['Ferrari', 'Lamborghini', 'Audi', 'Aston Martin', 'Ford']

// console.log(cars[1]) // Lamborghini
// console.log(cars.length) //5

let ourCars = [{
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25580,
    color: 'Grey'
}, {
    brand: 'Jeep',
    year: 2015,
    model: 'Grand Cherokee',
    color: 'Black',
    miles: 55_000
}]

console.log(ourCars[1].miles)

const { miles,year} = ourCars[0]

const age = 2022 - year
const mileage = miles/age

console.log(mileage + 'miles per year')

// if (mileage < 10000) {
//     console.log('This is a low mileage car')
// } else {
//     console.log('This is a high mileage car')
// }
const message = (mileage < 10000)
    ? ('This is a low mileage car')
    : ('This is a high mileage car')
    console.log(message)