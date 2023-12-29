var test = readline()

while (test--) {
    var n = +readline()
    var odd = 0, even = 0
    var nums = readline().split` `.map(x => {
        if (+x & 1) {
            odd++;
        } else {
            even++;
        }
        return +x;
    })

    if (n & 1) {
        print(-1)
        continue
    }

    print(Math.abs(even - odd) / 2)

}