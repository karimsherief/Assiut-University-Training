readline();
var freq = {}
var nums = readline().split` `.map(x => {
    freq[+x] = freq[+x] ? freq[+x] + 1 : 1
})

for (var i of Object.keys(freq)) {
    print(i, freq[i])
}