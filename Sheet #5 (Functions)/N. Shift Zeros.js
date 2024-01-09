var n = +readline()
var arr = readline().split` `.map(x => +x)
var ans = Array(n).fill(0)
for (var i = 0, j = 0; i < n; i++) {
    if (arr[i]) {
        ans[j] = arr[i]
        j++;
    }
}
print(...ans)
