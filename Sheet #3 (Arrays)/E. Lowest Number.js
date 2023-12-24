readline()
var nums = readline().split` `.map(x => +x)
var min = Math.min(...nums)

print(min, nums.indexOf(min) + 1)