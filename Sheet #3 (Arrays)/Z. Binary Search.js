var input = readline().split` `.map(x => +x)
var n = input[0], q = input[1];
var map = {}

readline().split` `.forEach(x => map[+x] = true)
while (q--) {
    var x = +readline()
    print(map[x] ? "found" : "not found");
}
