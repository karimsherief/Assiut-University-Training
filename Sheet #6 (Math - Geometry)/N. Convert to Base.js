var convertToBaseX = (number, base) => number.toString(base).toUpperCase();

var convertToDecimal = (number, base) => parseInt(number, base)

var t = +readline();

var input = readline().split` `
var number = input[0], base = +input[1]

print(t === 1 ? convertToDecimal(number, base) : convertToBaseX(+number, base))