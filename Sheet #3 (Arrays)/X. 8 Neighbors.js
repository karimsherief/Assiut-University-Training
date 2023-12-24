var dirX = [0, 0, 1, - 1, 1, 1, -1, -1];
var dirY = [1, - 1, 0, 0, 1, -1, 1, -1];
function isValid(x, y) {
    if (x >= n || y >= m)
        return false;
    if (x < 0 || y < 0)
        return false;
    return true;
}
var input = readline().split` `.map(x => +x)
var n = input[0], m = input[1];
var arr = []
for (var i = 0; i < n; i++) {
    arr.push(readline())
}
var input = readline().split` `.map(x => +x)
var x = input[0] - 1, y = input[1] - 1;
var ans = "yes";
for (var i = 0; i < 8; i++) {
    var newX = x + dirX[i];
    var newY = y + dirY[i];
    if (isValid(newX, newY)) {
        if (arr[newX][newY] === '.') {
            ans = "no";
            break;
        }
    }
}
print(ans);