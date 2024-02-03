ILoveRecursion(+readline())
function ILoveRecursion(n) {
    if (!n) {
        return;
    }
    print("I love Recursion")
    return ILoveRecursion(n - 1)
}