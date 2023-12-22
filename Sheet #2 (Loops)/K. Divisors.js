function getDivisors(x) {
    for (var i = 1; i <= x; i++) {
        if (x % i === 0) {
            print(i)
        }
    }
}
getDivisors(+readline())