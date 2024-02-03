print(Combination(...readline().split` `.map(x => +x)));
function Combination(n, r) {
    if (r === 0) return 1;
    return ((n * Combination(n - 1, r - 1)) / r);
}