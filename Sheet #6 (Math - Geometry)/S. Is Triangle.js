var input = readline().split` `.map(x => +x)
var a = input[0], b = input[1], c = input[2]
if (isValidTriangel(a, b, c)) {
    print("Valid")
    getArea(a, b, c)
} else {
    print("Invalid")
}
function isValidTriangel(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) return false
    return true
}

function getArea(a, b, c) {
    var s = (a + b + c) / 2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(6)
}