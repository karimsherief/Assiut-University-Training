var input = readline().split` `.map(x => +x)
var limak = input[0], bob = input[1], years = 0;

while (limak <= bob) {
    limak *= 3
    bob *= 2
    years++;
}

print(years)