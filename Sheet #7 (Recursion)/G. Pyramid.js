Pyramid(0, +readline())
function Pyramid(i, n) {
    if (n === i) return;
    print(
        (function draw(i, j, n) {
            if (j === n + i) return "";
            return ((j >= n - 1 - i) ? "*" : " ") + draw(i, j + 1, n)
        }
        )(i, 0, n)
    )

    Pyramid(i + 1, n);
}