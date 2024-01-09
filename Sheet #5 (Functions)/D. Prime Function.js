var test = readline()
while (test--) {
    print(isPrime(+readline()) ? "YES" : "NO")
}
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

