var input = readline().split` `.map(x => +x);
var shiftTimes = input[1]
var nums = readline().split` `.map(x => +x)
while (shiftTimes--) {
    nums.unshift(nums.pop())
}

print(...nums)