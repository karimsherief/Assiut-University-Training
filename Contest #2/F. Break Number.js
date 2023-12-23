readline();
var max = -1;
readline().split` `.forEach(num => {
    var cnt = 0;

    while (+num % 2 === 0) {
        num = Math.trunc(+num / 2);
        cnt++;
    }

    max = Math.max(max, cnt);
})

print(max)