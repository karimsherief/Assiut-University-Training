log2(+readline())
function log2(num) {
    if (num === 1) return 0

    return 1 + log2(num / 2)
}