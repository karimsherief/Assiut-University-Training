var freq = {}
var m = readline().split` `.map(x => +x)[1]
readline().split` `.forEach(x => {
    freq[+x] = freq[+x] ? freq[+x] + 1 : 1
})

for (var i = 1; i <= m; i++) {
    print(freq[i] ? freq[i] : 0)
}

