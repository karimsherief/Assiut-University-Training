var number = readline(), nines = "9999"
print(sum(number, nines))
print(multiply(number, nines))
function sum(number, nines) {
    number = `${"0".repeat(Math.abs(number.length - 4))}${number}`;
    nines = `${"0".repeat(Math.abs(number.length - 4))}${nines}`;

    var carry = 0;
    var sum = '';
    var maxLength = Math.max(number.length, 4);

    for (var i = maxLength - 1; i >= 0; i--) {
        var digitSum = (+number[i] + +nines[i] + carry).toString();
        carry = digitSum.length > 1 ? +digitSum[0] : 0;
        sum = (digitSum.length > 1 ? digitSum[1] : digitSum[0]) + sum;
    }

    if (carry > 0) {
        sum = carry + sum;
    }

    return sum;
}

function multiply(number, nines) {
    var len1 = number.length;
    var len2 = nines.length;
    var result = Array(len1 + len2).fill(0);

    for (var i = len1 - 1; i >= 0; i--) {
        for (var j = len2 - 1; j >= 0; j--) {
            var product = parseInt(number[i]) * parseInt(nines[j]);
            var sum = product + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    while (!result[0]) {
        result.shift();
    }

    return result.join('');
}