input = readline().split` `.map(x => +x);

x = input[0], y = input[1], z = input[2]

input.sort((a, b) => a - b)

print(`${input[0]}
${input[1]}
${input[2]}

${x}
${y}
${z}
`)