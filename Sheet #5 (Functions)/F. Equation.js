print(equation(...readline().split` `.map(x => +x)))

function equation(x, y) {
    var ans = 0
    for (var i = 2; i <= y; i += 2) {
        ans += x ** y
    }
    return ans
}