readline()
var arr = readline().split` `.map(num => num > 0 ? 1 : num < 0 ? 2 : num)

print(...arr)