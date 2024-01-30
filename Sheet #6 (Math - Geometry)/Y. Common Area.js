var test = +readline()

for (var i = 1; i <= test; i++) {
    var rectangles = +readline()
    rectangles--;
    var input = readline().split` `.map(x => +x)

    var maxX = input[0],
        maxY = input[1],
        minX = input[2],
        minY = input[3]
        
    while (rectangles--) {
        input = readline().split` `.map(x => +x)
        maxX = Math.max(input[0], maxX)
        maxY = Math.max(input[1], maxY)
        minX = Math.min(input[2], minX)
        minY = Math.min(input[3], minY)
    }

    var ans = (minX > maxX && minY > maxY) ? (minX - maxX) * (minY - maxY) : 0

    print(`Case #${i}: ${ans}`)
}
