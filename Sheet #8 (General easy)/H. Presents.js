var n = +readline()
var map = new Map()
readline().split` `.forEach((num, index) => {
    map.set(+num, index + 1)
})

for (var i = 1; i <= n; i++) {
    write(map.get(i), "")
}