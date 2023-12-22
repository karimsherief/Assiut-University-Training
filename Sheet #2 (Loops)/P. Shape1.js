function drawReversedPyramid(n) {
    for (var i = n; i >= 1; i--) {
        print("*".repeat(i))
    }
}
drawReversedPyramid(+readline())