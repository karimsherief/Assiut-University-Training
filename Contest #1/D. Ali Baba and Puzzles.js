input = readline().split` `.map(x => +x)

a = input[0], b = input[1], c = input[2], d = input[3]

if (
    a + b - c === d ||
    a + b * c === d ||
    a - b + c === d ||
    a - b * c === d ||
    a * b + c === d ||
    a * b - c === d
) {
    print("YES");
} else {
    print("NO");
}