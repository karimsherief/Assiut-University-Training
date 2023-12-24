var n = readline().split` `.map(x => +x)[0]
var map = {}
while (n--) {
    readline().split` `.map(x => map[x] = 1)
}

print(map[+readline()] ? "will not take number" : "will take number")