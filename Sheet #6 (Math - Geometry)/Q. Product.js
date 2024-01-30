var input = readline().split` `.map(x => +x)

var l = input[0], r = input[1], mod = input[2]
var ans = 1;
while (l <= r) {
    ans *= l;
    ans %= mod
    l++;
}

print(ans)