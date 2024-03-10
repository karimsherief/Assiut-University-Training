var police = 0, crimes = 0
readline()
readline().split` `.forEach(x => {
    if (+x > 0) {
        police += +x
    } else {
        if (police) {
            police--;
        } else {
            crimes++;
        }
    }
})

print(crimes)