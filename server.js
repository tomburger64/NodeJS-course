// don't forget to install node if don't have it yet

// node runs in the "global" object
// js runs in the window object (browser)

console.log("fotrinte blatle rolya")

console.log(global)

const os = require('os')
const path = require('path')

// destructuring the simple math functions done in the math.js file
const {add, subtract, multiply, divide} = require('./math')
console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

// those are called "core modules"