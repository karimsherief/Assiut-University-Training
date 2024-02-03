var test = +readline()
while (test--) {
    var n = +readline()
    print(ReachValue(1, n) ? "YES" : "NO")
}

function ReachValue(intial, n) {
    if (intial === n) return true
    var x = intial * 10, y = intial * 20, ans = false;

    if (x <= n) {
        ans = ReachValue(x, n) || ans;
    }
    if (y <= n) {
        ans = ReachValue(y, n) || ans
    }
    return ans
}