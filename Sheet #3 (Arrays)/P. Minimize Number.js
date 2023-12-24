readline()
var ans = Number.MAX_SAFE_INTEGER;
readline().split` `.map(x => {
    var mod = 0;
    while (+x % 2 === 0) {
        x /= 2;
        mod++;
    }
    ans = Math.min(ans, mod)
})

print(ans)