var n = +readline()
var arr = readline().split` `.map(x => +x)

print(PalindromeArray(arr, 0, n - 1))
function PalindromeArray(arr, i, j) {
    if (i >= j) return "YES"
    if (arr[i] !== arr[j]) return "NO"
    return PalindromeArray(arr, i + 1, j - 1)

}