print(NumberOfWays(...readline().split` `.map(x => +x)))
function NumberOfWays(start, end) {
    if (start > end) return 0;
    if (start === end) return 1;

    return NumberOfWays(start + 1, end) + NumberOfWays(start + 2, end) + NumberOfWays(start + 3, end)
}