var plandiromeNumbers = {};
function isPlandirome(x) {
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true
}
for (var i = 2, j = 1; i <= 50; i++) {
    if (isPlandirome(i)) {
        plandiromeNumbers[i] = j;
        j++;
    }
}

print(
    readline()
        .split` `
        .reduce(
            (n, m) => plandiromeNumbers[+m] === plandiromeNumbers[+n] + 1
        )
        ? "YES" : "NO"
);