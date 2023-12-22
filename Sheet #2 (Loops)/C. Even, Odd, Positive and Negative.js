var even = 0, odd = 0, postive = 0, negative = 0
readline();

readline().split` `.forEach(x => {
    if (x > 0) {
        postive++;
    } else if (x < 0) {
        negative++;
    }
    if (x & 1) {
        odd++;
    } else {
        even++;
    }
})

print(`Even: ${even}
Odd: ${odd}
Positive: ${postive}
Negative: ${negative}`)