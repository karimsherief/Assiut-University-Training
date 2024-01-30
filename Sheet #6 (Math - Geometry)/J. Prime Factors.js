var map = new Map()
var n = +readline()
var divisors = getDivisors(n)
var tmp = divisors.reduce((a, c) => a * c)
var remain = n / tmp
for (var i = divisors.length - 1; i >= 0; i--) {
    while (remain % divisors[i] === 0) {
        var pow = map.get(divisors[i])
        map.set(divisors[i], pow + 1)
        remain /= divisors[i]
    }
}

var ans = []
for (var key of map) {
    ans.push(`(${key.join("^")})`)
}
print(ans.join('*'))
function isPrime(num) {
    if (num === 1) {
        return false
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
function getDivisors(num) {
    var divisors = new Set()
    for (var i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (isPrime(i)) {
                divisors.add(i)
                map.set(i, 1)
            }
            if (isPrime(num / i)) {
                divisors.add(num / i)
                map.set(num / i, 1)
            }
        }
    }
    return [...divisors]
}
