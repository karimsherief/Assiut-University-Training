var test = +readline()

while (test--) {
    var n = +readline();
    var nums = readline().split` `.map(x => +x)
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            nums.push(Math.max(...nums.slice(i, j + 1)))
        }
    }
    print(...nums)
}

