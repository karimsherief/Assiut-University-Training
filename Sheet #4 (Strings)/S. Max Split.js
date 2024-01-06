var l = 0, r = 0, j = 0
var ans = []
var s = readline()
s.split``.forEach((c, i) => {
    if (c === 'L') {
        l++;
    } else {
        r++;
    }
    if (l && r && l === r) {
        l = 0, r = 0
        ans.push(s.slice(j, i + 1))
        j = i + 1
    }
})

print(ans.length)
ans.forEach(el => print(el))