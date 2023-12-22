function oddSum(x, y) {
    var l = Math.min(x, y) + 1;
    var r = Math.max(x, y);
    var sum = 0;
    while (l < r) {
        if (l & 1) {
            sum += l;
        }
        l++;
    }
    return sum;
}
var test = readline()
while (test--) {
    print(oddSum(...readline().split` `.map(x => +x)))
}