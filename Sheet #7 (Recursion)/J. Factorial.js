print(Factorial(+readline()))
function Factorial(n) {
    if (n === 1) return n;
    return n * Factorial(n - 1)
}