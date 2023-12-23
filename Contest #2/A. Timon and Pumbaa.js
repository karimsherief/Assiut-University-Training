var input = readline().split` `.map(x => +x)
var timon = input[0], pumbaa = input[1];

print(timon - pumbaa >= 0 ? timon - pumbaa : 0);