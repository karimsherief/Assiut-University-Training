
var memo = {
    0: 0,
    1: 1
}
function fib(n) {
    if (n < 2)
        return n;

    if (n in memo) {
        return memo[n]
    }

    return memo[n] = fib(n - 1) + fib(n - 2);
}


print(fib(+readline()))
