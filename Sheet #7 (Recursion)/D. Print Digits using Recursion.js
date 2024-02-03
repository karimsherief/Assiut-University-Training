var test = +readline()

while (test--) {
    PrintDigits(+readline())
    print()
}

function PrintDigits(n) {
    if (n < 10) {
        write(n, '')
        return
    }
    PrintDigits(Math.trunc(n / 10))
    write(n % 10, '')
}