print(NTo1(+readline()));
function NTo1(n) {
    if (n === 1) return n;
    return [n, NTo1(n - 1)].join` `
}