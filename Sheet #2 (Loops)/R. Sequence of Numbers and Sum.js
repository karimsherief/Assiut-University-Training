function sum(n, m) {
    var min = Math.min(n, m);
    var max = Math.max(n, m);
    var res = 0;
    var ans = []
    while (min <= max) {
        ans.push(min)
        res += min;
        min++;
    }
    ans.push(`sum =${res}`)
    print(...ans)
}

while (true) {
    var nums = readline().split` `.map(x => +x)
    if (nums.some(x => x <= 0)) {
        break;
    }
    sum(...nums);
}