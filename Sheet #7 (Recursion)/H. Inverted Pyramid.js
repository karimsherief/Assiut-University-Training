InvertedPyramid(0, +readline())
function InvertedPyramid(i, n) {
    if (n === i) return;
    InvertedPyramid(i + 1, n);
    print(
        (function draw(i, j, n) {
            if (j === n + i) return "";
            return ((j >= n - 1 - i) ? "*" : " ") + draw(i, j + 1, n)
        }
        )(i, 0, n)
    )
}