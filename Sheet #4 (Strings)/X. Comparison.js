var s = readline()
var ans = s;
var x = s[0], y = s.slice(1)
for (var i = 0; i < s.length - 1; i++) {
    var merge = x.split``.sort().join`` + y.split``.sort().join``
    if (merge < ans) {
        ans = merge
    }
    x += y[0];
    y = y.slice(1)
}
print(ans)