var n = +readline()
var arr = readline().split` `.map(x => +x)
print(Sum(arr, n - 1))
function Sum(arr, n) {
    if (!n) return arr[0]
    return arr[n] + Sum(arr, n - 1)
}