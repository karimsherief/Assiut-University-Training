var input = readline().split` `.map(x => +x)
var x1 = input[0], y1 = input[1]
input = readline().split` `.map(x => +x)
var x2 = input[0], y2 = input[1]
input = readline().split` `.map(x => +x)
var x3 = input[0], y3 = input[1]


print((y2 - y1) * (x3 - x2) === (y3 - y2) * (x2 - x1) ? "YES" : "NO")