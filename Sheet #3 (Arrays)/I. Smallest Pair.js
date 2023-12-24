var test = readline()

while (test--) {
    readline()
    var nums = readline().split` `.map(x => +x)
    var min = Number.MAX_SAFE_INTEGER

    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            min = Math.min(min, nums[i] + nums[j] + j - i)
        }
    }
    print(min)
}