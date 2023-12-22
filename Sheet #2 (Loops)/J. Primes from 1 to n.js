function isPrime(x) {
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0)
            return false;
    }
    return true;
}
var n = +readline(),
    ans = []
for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
        ans.push(i)
    }
}

print(...ans)