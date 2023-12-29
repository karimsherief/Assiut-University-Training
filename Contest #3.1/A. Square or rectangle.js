var test = readline()

while (test--) {
    var nums = readline().split` `.map(x => +x)
    print(nums[0] === nums[1] ? "Square" : "Rectangle")
}