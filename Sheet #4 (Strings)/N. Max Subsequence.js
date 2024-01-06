var n = +readline();
var s = readline()
var tmp = s[0]
var ans = 1
for (var i = 1; i < n; i++) {
    if (tmp !== s[i]) {
        tmp = s[i];
        ans++;
    }
}
print(ans)