function drawPyramid(n) {
    for (var i = 1; i <= n; i++) {
        print("*".repeat(i))
    }
}

drawPyramid(+readline())