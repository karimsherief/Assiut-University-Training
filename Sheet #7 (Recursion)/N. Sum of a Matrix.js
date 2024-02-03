var input = readline().split` `.map(x => +x)
var rows = input[0], columns = input[1]
var matrixA = [], matrixB = []
for (var i = 0; i < rows; i++) {
    matrixA.push(readline().split` `.map(x => +x))
}
for (var i = 0; i < rows; i++) {
    matrixB.push(readline().split` `.map(x => +x))
}
var result = new Array(rows).fill(0).map(() => new Array(columns).fill(0))
matrixSum(matrixA, matrixB, rows, columns, result, 0, 0)
for (var i = 0; i < rows; i++) {
    print(...result[i])
}
function matrixSum(matrixA, matrixB, rows, columns, result, i, j) {
    if (i === rows) return;


    if (j < columns) {
        result[i][j] = matrixA[i][j] + matrixB[i][j];
        matrixSum(matrixA, matrixB, rows, columns, result, i, j + 1);
    }
    if (j === columns) {
        matrixSum(matrixA, matrixB, rows, columns, result, i + 1, 0);
    }
}