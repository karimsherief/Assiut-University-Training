var input = readline().split` `.map(x => +x)
var n = input[0], m = input[1]
var arr = readline().split` `.map(x => +x)

print(SuffixSum(arr, n - m, n))
function SuffixSum(arr, i,n) {
    if (i === n) return 0
    return arr[i] + SuffixSum(arr, i + 1, n)

}

