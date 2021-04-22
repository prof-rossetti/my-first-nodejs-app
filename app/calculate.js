// this is the "app/calculate.js" file...

// here we are requiring / loading some functionality
// ... from a locally-installed package (in the "node_modules/" directory):
var d3 = require("d3")

var someIntegers = [9, 13, 99, 3]
console.log("THE ARRAY IS:", someIntegers)

var maxNumber = d3.max(someIntegers)
console.log("MAXIMUM NUMBER IN THE ARRAY IS:", maxNumber)
