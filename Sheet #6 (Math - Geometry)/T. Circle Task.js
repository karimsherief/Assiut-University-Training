var input = readline().split` `.map(x => +x)
var x = input[0], y = input[1], r = input[2], n = input[3]
var maxX = x + r, minX = x - r, maxY = y + r, minY = y - r
while (n--) {
    var input = readline().split` `.map(x => +x)
    var newX = input[0], newY = input[1]
    var distance = Math.sqrt((x - newX) * (x - newX) + (y - newY) * (y - newY))
    print(distance <= r ? "YES" : "NO")
}