input = readline().split` `.map(x => +x)

x = input[0];
y = input[1];

print(x % y && y % x ? "No Multiples" : "Multiples")