var input = readline().split` `.map(x => +x),
    n = input[0], q = input[1];
var prefix = [0]
var arr = readline().split` `.map((x, i) => {
    prefix[i + 1] = +x + prefix[i]
    return +x
})



while (q--) {
    var range = readline().split` `.map(x => +x)
    var l = range[0], r = range[1]
    print(prefix[r] - prefix[l - 1])
}