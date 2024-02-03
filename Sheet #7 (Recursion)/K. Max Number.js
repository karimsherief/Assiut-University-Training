var n = +readline()
var arr = readline().split` `.map(x => +x)

print(MaxNumber(arr, n - 1))

function MaxNumber(arr, n) {
    if (!n) return arr[0]
    return Math.max(arr[n], MaxNumber(arr, n - 1))
}