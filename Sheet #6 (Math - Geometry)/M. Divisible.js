var strToArr = readline().split` `
var input = strToArr
var n = input[0], x = +input[1]
var res = 0;
n.toString().split``.forEach(number => {
    res += +number;
    res %= x;
    res *= 10;
})

print(res ? "NO" : "YES");