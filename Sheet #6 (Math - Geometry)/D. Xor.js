var input = readline().split` `.map(x => +x)
var a = input[0]
var b = input[1]
var q = input[2]

print(q % 3 === 1 ? a : q % 3 === 2 ? b : a ^ b)