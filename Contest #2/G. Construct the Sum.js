var test = +readline()

while (test--) {
    var input = readline().split` `.map(x => +x)
    var n = input[0],
        s = input[1],
        ans = []

    for (var i = n; i >= 1 && s; i--) {
        if (i <= s) {
            ans.push(i);
            s -= i;
        }
    }
    if (s) {
        print(-1)
        continue;
    }
    
    print(...ans.reverse())
}
