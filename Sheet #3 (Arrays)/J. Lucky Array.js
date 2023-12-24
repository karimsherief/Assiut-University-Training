readline();
var freq = {}
var nums = readline().split` `.map(x => {
    freq[+x] = freq[+x] ? freq[+x] + 1 : 1
    return +x;
})

print(freq[Math.min(...nums)] & 1 ? "Lucky" : "Unlucky")