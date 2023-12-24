var n = +readline(),
    arr = [], sum1 = 0, sum2 = 0

while (n--) {
    arr.push(readline().split` `.map(x => +x))
}
for (var i = 0, j = 0; i < n; i++, j++) {
    sum1 += arr[i][j];
}
for (var i = 0, j = n - 1; i < n; i++, j--) {
    sum2 += arr[i][j];
}
print(Math.abs(sum1 - sum2))