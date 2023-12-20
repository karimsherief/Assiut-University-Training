input = readline().split` `.map(x => +x)

disscount = input[0], newPrice = input[1];

print(Number(newPrice / (1 - discount / 100)).toPrecision(2))