var input = readline().split` `.map(x => +x)

var n = input[0], m = input[1]
var arr = []
for (var i = 0; i < n; i++) {
    arr.push(readline().split` `.map(x => +x))
}
for (var i = 0; i < n; i++) {
    print(...arr[i].reverse())
}

