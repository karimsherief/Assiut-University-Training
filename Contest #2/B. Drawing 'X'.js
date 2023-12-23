function drawX(n) {
    for (var i = 0; i < n; i++) {
        var line = ""
        for (var j = 0; j < n; j++) {
            if (j === Math.trunc(n / 2) && i === Math.trunc(n / 2)) {
                line += 'X'
            }
            else if (i == j) {
                line += "\\"
            }
            else if (n - (j + 1) == i) {
                line += '/'
            }
            else {
                line += "*"
            }
        }
        print(line)
    }
}

drawX(+readline())