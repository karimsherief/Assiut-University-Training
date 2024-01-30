print(sum(...readline().split` `))

function sumEven(n) {
    return n * (n + 1)
}
function sumOdd(n) {
    return Math.pow(Math.trunc((n + 1) / 2), 2)
}
function sum(x, y) {
    var l = Math.min(x, y), r = Math.max(x, y)

    var even = sumEven(Math.trunc(r / 2)) - sumEven(Math.trunc((l - 1) / 2))
    var odd = sumOdd(r) - sumOdd(l - 1)

    return `${even + odd}\n${even}\n${odd}`
}