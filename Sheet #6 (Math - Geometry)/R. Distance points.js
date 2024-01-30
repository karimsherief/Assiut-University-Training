var input = readline().split` `.map(x => +x)
var x1 = input[0], y1 = input[1], x2 = input[2], y2 = input[3]
var distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
print(distance.toFixed(9))
