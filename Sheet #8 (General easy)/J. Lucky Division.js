var luckyNums = []
function generetateLuckyNumbers() {

    for (var i = 4; i < 1000; i++) {
        if (/^[47]+$/.test(i)) {
            luckyNums.push(i)
        }
    }

}
generetateLuckyNumbers()
var number = +readline()
var flag = false;
for (var i = 0; i < luckyNums.length; i++) {
    if (number % luckyNums[i] === 0) {
        flag = true;
        break
    }
    if (luckyNums[i] > number) {
        break;
    }
}

print(flag ? "YES" : "NO")