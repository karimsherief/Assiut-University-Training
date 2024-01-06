var test = +readline()

while (test--) {
    var input = readline().split` `
    var a = input[0],
        b = input[1]
    for (var i = 0, j = 0; i < a.length && j < b.length; i++, j++) {
        write(a[i])
        write(b[j])
    }
    write(a.length > b.length ? a.slice(i) : b.slice(j))
    print("")
}