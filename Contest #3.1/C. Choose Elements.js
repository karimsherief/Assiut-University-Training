var inputs = readline().split` `.map(x => +x)
var n = inputs[0], k = inputs[1], sum = 0

var nums = readline().split` `.map(x => +x).sort((a, b) => a - b)

for (var i = n - 1; i >= 0 && k; i--) {
    if (sum + nums[i] > sum) {
        k--;
        sum += nums[i];
    }
}
print(sum)