var matrixA = new Array(100).fill(new Array(100).fill(0)),
    matrixB = new Array(100).fill(new Array(100).fill(0)),
    columnA, rowA, columnB, rowB;
var input = readline().split` `.map(x => +x)

rowA = input[0], columnA = input[1]

for (var i = 0; i < rowA; i++) {
    matrixA[i] = [...readline().split` `.map(x => +x)]
}

var input = readline().split` `.map(x => +x)

rowB = input[0], columnB = input[1]

for (var i = 0; i < rowB; i++) {
    matrixB[i] = [...readline().split` `.map(x => +x)]
}

for (var i = 0; i < rowA; i++) {
    var ans = []
    for (var k = 0; k < columnB; k++) {
        var sum = 0;
        for (var j = 0; j < rowB; j++) {
            sum += matrixA[i][j] * matrixB[j][k];
        }
        ans.push(sum)
    }
    print(...ans)
}