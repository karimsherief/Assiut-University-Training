var input = readline().split` `.map(x => +x)
var k = input[0], s = input[1], nums = 0;

for (var x = 0; x <= k; x++) {
    for (var y = 0; y <= k; y++) {
        if (s - x - y >= 0 && s - x - y <= k) {
            nums++;
        }
    }
}

print(nums) 