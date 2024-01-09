var test = readline()

while (test--) {
    var input = readline().split` `
    var times = input[0]
    var c = input[1]
    print(...c.repeat(times))
}