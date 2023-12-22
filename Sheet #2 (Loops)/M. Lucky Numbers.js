function lukyNumbers(x, y) {
    var ans = [];

    while (x <= y) {

        var flag = x.toString().split``.every(n => +n == 4 || n == 7);

        if (flag) {
            ans.push(x);
        }
        x++;
    }
    return ans.length ? ans : [-1];
}

numbers = readline().split` `.map(x => +x)

print(...lukyNumbers(...numbers))