OneToN(+readline())
function OneToN(n) {
    if (!n) return;
    OneToN(n - 1)
    print(n)
}