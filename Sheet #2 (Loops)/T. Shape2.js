function drawPyramid(n) {
    for (var i = 1, k = 1; i <= n; i++, k += 2) {
        var space = " ".repeat(n - i)
        var stars = "*".repeat(k)

        print(space + stars)
    }
}

drawPyramid(+readline())