input = readline().split` `.map(x => +x);

x = input[0];
y = input[1];

print(`floor ${x} / ${y} = ${Math.floor(x / y)}
ceil ${x} / ${y} = ${Math.ceil(x / y)}
round ${x} / ${y} = ${Math.round(x / y)}
`)
