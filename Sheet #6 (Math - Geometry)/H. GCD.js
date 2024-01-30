var input = readline().split` `.map(x => +x)
var ans = gcd(...input)
var a = input[0], b = input[1]
print(`${ans} ${Math.trunc((a % 1000000000) * (b % 1000000000) / ans)}`)

export function gcd(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}
// module.exports = gcd

// TODO : Constrains