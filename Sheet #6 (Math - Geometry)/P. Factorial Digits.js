print(factorial(+readline()));

function factorialDigits(n) {
    var digits = 0;
    for (var i = 1; i <= n; i++) {
        digits += Math.log10(i)
    }
    digits = Math.trunc(digits + 1)
    return `Number of digits of ${n}! is ${digits}`
}