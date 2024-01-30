function divisorsSum(n) {
    var sum = 0;
    for (var i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== Math.trunc(n / i)) {
                sum += Math.trunc(n / i);
            }
        }
    }
    return sum;
}
print(divisorsSum(+readline()))