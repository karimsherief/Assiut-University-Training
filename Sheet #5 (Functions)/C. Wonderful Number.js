print(isWonderFul(+readline()) ? "YES" : "NO")
function convertToBinary(num) {
    return num.toString(2)
}
function isPlandirome(num) {
    return num.split``.reverse().join`` === num
}
function isWonderFul(num) {
    if (num & 1) {
        if (isPlandirome(convertToBinary(num))) {
            return true
        }
    }
    return false
}