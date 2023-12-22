function printDigits(n) {
    var s = n.toString();
    var ans = []
    for (var i = s.length - 1; i >= 0; i--) {
        ans.push(s[i])
    }
    print(...ans)
}

var n = readline()
while (n--) {
    printDigits(+readline());
}