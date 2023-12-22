function gcd(x, y) {
    var mx = Math.max(x, y), ans = 1;
    for (var i = 1; i <= mx; i++) {
        if (x % i === 0 && y % i === 0) {
            ans = i;
        }
    }
    return ans;
}

print(gcd(...readline().split` `.map(x => +x)))