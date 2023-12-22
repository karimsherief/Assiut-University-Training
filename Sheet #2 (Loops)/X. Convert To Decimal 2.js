function convertToBinary(n) {
    var ans = "";
    while (n) {
        ans = (n & 1) + ans
        n = Math.trunc(n / 2)
    }
    return ans;
}
function convertToDecimal(n) {
    var ans = 0;
    for (var i = 0; i < n.length; i++) {
        ans += +n[i] * Math.pow(2, n.length - 1 - i);
    }
    return ans;
}
var test = +readline();
while (test--) {
    var x = +readline();
    var binary = convertToBinary(x);
    var ones = binary.match(/1/g).join('');

    print(convertToDecimal(ones))
}
