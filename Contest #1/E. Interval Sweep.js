input = readline().split` `.map(x => +x)

a = input[0], b = input[1]

print((Math.abs(a - b) === 1 || a === b) && a && b ? "YES" : "NO")