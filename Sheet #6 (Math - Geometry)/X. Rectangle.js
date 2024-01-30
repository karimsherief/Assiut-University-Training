var input = readline().split` `.map(x => +x)
var xs = input.filter((x, i) => i % 2 === 0)
var ys = input.filter((x, i) => i & 1)

var minX = Math.min(...xs),
    maxX = Math.max(...xs),
    minY = Math.min(...ys),
    maxY = Math.max(...ys)

var points = +readline()

while (points--) {
    input = readline().split` `.map(x => +x)
    var x = input[0], y = input[1]

    print(x >= minX && x <= maxX && y >= minY && y <= maxY ? "YES" : "NO")
}