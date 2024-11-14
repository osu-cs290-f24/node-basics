function circumference(r) {
  return 2 * Math.PI * r
}

function area(r) {
  return Math.PI * r * r
}

// module.exports = circumference
// module.exports = "some string"
module.exports = {
  circumference: circumference,
  area: area
}
