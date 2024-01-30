var strToArr = readline().split` `
var input = strToArr.map(x => +x)
var a = input[0], b = input[1]

print(factorial(a) / (factorial(a - b) * factorial(b)), factorial(a) / factorial(a - b))

function factorial(x) {
    return !x || x === 1 ? 1 : x * factorial(x - 1);
}