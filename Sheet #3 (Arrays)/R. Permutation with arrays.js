readline();
var a = readline().split` `.map(x => +x).sort((a, b) => a - b)
var b = readline().split` `.map(x => +x).sort((a, b) => a - b)

print(a.every((x, i) => x === b[i]) ? "yes" : "no")