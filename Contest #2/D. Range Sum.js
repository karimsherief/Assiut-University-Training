var test = readline()

while (test--) {
    var input = readline().split` `.map(x => +x)
    var min = Math.min(...input);
    var max = Math.max(...input);

    print(max * (max + 1) / 2 - min * (min - 1) / 2)
}