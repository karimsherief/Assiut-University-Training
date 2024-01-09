readline()
var nums = readline().split` `.map(x => +x)
print(`${Math.min(...nums)} ${Math.max(...nums)}`)