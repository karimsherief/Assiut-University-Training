var firends = readline().split` `.map(x => +x)
var min = Math.min(...firends),
    max = Math.max(...firends);

print(max - min)