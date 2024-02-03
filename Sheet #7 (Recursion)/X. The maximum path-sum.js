var dirX = [0, 1]
var dirY = [1, 0]
var input = readline().split` `.map(x => +x)
var arr = []
var n = input[0], m = input[1]
for (var i = 0; i < n; i++) {
    arr.push(readline().split` `.map(x => +x))
}

print(MaxPathSum(n - 1, m - 1, 0, 0))
function isValid(i, j) {
    if (i >= n || j >= m) return false
    return true
}
function MaxPathSum(x, y, i, j) {
    if (!isValid(i, j)) return -1000000
    if (i === x && j === y) return arr[i][j]

    return arr[i][j] + Math.max(MaxPathSum(x, y, i + 1, j), MaxPathSum(x, y, i, j + 1))
}
