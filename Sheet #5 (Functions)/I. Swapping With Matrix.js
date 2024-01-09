var input = readline().split` `.map(x => +x);
var n = input[0];
var x = input[1] - 1;
var y = input[2] - 1;
var matrix = [];

for (var i = 0; i < n; i++) {
    matrix.push(readline().split` `)
}

var ans = JSON.parse(JSON.stringify(matrix))

for (var i = 0; i < n; i++) {
    ans[x][i] = matrix[y][i]
    ans[y][i] = matrix[x][i]
}
for (var i = 0; i < n; i++) {
    var tmp = ans[i][x]
    ans[i][x] = ans[i][y]
    ans[i][y] = tmp
}
for (var i = 0; i < n; i++) {
    print(...ans[i])
}
