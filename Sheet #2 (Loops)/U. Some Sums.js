var digitsSum = x => x.toString().split``.reduce((a, b) => +a + +b)

var numbers = readline().split` `.map(x => +x), sum = 0

var n = numbers[0], a = numbers[1], b = numbers[2]


for (var i = 1; i <= n; i++) {
    var digits = digitsSum(i);

    if (digits >= a && digits <= b) {
        sum += i;
    }
}
print(sum)