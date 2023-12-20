input = readline().split` `.map(x => +x)
eyes = input[0], mouths = input[1], bodies = input[2], dummies = 0;


min = Math.min(eyes, mouths, bodies);

dummies = min;
eyes -= min;
mouths -= min;
bodies -= min;

if (!eyes || !bodies) {
    print(dummies);
} else if (Math.trunc(eyes / 2) > bodies) {
    print(dummies + bodies);
} else {
    dummies += Math.trunc(eyes / 2);
    print(dummies)
}
