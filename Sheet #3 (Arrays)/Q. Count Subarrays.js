var test = readline()

while (test--) {
    var n = +readline();
    var nums = readline().split` `.map(x => +x)
    var subs = n;
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (nums[j] <= nums[j - 1]) {
                break;
            }
            subs++;
        }
    }
    print(subs)
}