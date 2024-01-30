var input = readline().split` `.map(x => +x)
var r = input[0], s = input[1]
var square = s * s,
    diagonal = Math.sqrt(square + square)

if (r * 2 <= s) {
    print("Square")
} else if (diagonal <= r * 2) {
    print('Circle')
} else {
    print("Complex")
}