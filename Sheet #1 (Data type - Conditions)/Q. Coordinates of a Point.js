input = readline().split` `.map(x => +x);

x = input[0], y = input[1]

if (x > 0 && y > 0) {
    print("Q1")
} else if (x < 0 && y > 0) {
    print("Q2")
} else if (x < 0 && y < 0) {
    print("Q3")
} else if (x > 0 && y < 0) {
    print("Q4")
} else if (x == 0 && y != 0) {
    print("Eixo Y")
} else if (x != 0 && y == 0) {
    print("Eixo X")
} else {
    print("Origem")
}