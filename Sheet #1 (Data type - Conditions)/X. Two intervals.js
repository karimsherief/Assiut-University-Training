input = readline().split` `.map(x => +x)

l1 = input[0], r1 = input[1], l2 = input[2], r2 = input[3]

if (l2 >= l1 && l2 <= r1) {
    print(`${l2} ${Math.min(r1, r2)}`);
}
else if (l1 >= l2 && l1 <= r2) {
    print(`${l1} ${Math.min(r1, r2)}`);
}
else {
    print(-1);
}