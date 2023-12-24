var input = readline().split` `.map(x => +x)
var a = input[0], b = input[1]
var code = readline()
var isNums = code.split`-`.every(x => Number.isInteger(+x))

print(isNums && code[a] === '-' ? "Yes" : "No")

