function drawPyramid(n) {
    for (var i = 1, k = 1; i <= n; i++, k += 2) {
        var spaces = ' '.repeat(n - i);
        var stars = "*".repeat(k);
        print(spaces + stars)
    }
    drawReversedPyramid(n);
}
function drawReversedPyramid(n) {
    for (var i = n, k = 2 * n - 1; i >= 1; i--, k -= 2) {

        var spaces = ' '.repeat(n - i);
        var stars = "*".repeat(k);

        print(spaces + stars)

    }
}

drawPyramid(+readline());