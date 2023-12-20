input = readline().split` `.map(x => +x)

n = input[0], k = input[1], a = input[2];

ans = n * k / a;
tmp = ans

if (Number(tmp).toFixed(1).slice(-1) == 0) {
    ans = parseInt(ans)
}

if (ans !== Math.trunc(ans)) {
    print('double')
} else {
    if (ans < 2147483648 && ans > -2147483647) {
        print('int')
    } else {
        print('long long')
    }
}