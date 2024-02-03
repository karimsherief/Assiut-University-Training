var n = +readline()
var arr = readline().split` `.map(x => +x)
print((Average(arr, n - 1) / n).toFixed(6))
function Average(arr, n) {
    if (!n) return arr[n]
    return Average(arr, n - 1) + arr[n]
}