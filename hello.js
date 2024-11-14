console.log("Hello, world!")
console.log("== process.env:", process.env)
console.log("== process.env.MY_ENV_VARIABLE:", process.env.MY_ENV_VARIABLE)
console.log("== __dirname:", __dirname)
console.log("== __filename:", __filename)

// var circumference = require("./circle")
// console.log("== circumference:", circumference)
// console.log("== circumference(5):", circumference(5))

var circle = require("./utils/circle")
console.log("== circle:", circle)
console.log("== circle.circumference(5):", circle.circumference(5))
console.log("== circle.area(5):", circle.area(5))

var figlet = require("figlet")
figlet("Hello, CS 290!", function (err, data) {
  if (!err) {
    console.log(data)
  }
})

var fs = require("fs")
fs.readFile("./utils/circle.js", function (err, data) {
  if (!err) {
    console.log("== file contents:", data.toString())
  }
})
console.log("== after file read")
