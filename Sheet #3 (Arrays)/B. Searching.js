var map = {}
readline()
readline().split` `.forEach((num, index) => {
    if (!map[num]) {
        map[num] = index + 1
    }
})

print(map[+readline()] - 1)