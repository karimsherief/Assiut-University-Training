var strToArr = readline().split` `
var Max = Math.max
var Min = Math.min
// ================================== //
var input = strToArr.map(x => +x)
var a = input[0], b = input[1], x = input[2];
var start = Min(a, b);
var end = Max(a, b);

print(divisabilty(x))

function divisabilty(x) {
    function sum(n) {
        return n * (n + 1) / 2
    }

    return sum(Math.trunc(end / x)) * x - sum(Math.trunc((start - 1) / x)) * x
}