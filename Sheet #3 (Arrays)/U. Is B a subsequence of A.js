readline()
var a = readline().split` `.map(x => +x)
var b = readline().split` `.map(x => +x)
for (var i = 0, j = 0; i < a.length; i++) {
    if (a[i] === b[j]) {
        j++;
    }
}

print(j == b.length ? "YES" : "NO")