var input = readline().split` `.map(x => +x)
var n = input[0], k = input[1], min = Number.MAX_SAFE_INTEGER
var ans = []
readline().split` `.map((num, index) => {
    min = Math.min(+num, min)
    if ((index + 1) % k === 0) {
        ans.push(min)
        min = Number.MAX_SAFE_INTEGER
    }
})

if (n % k) {
    ans.push(min)
}

print(...ans)