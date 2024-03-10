var n = +readline()
var word = readline().split``
var result = []

word.forEach((char, index) => {
    if (n & 1) {
        if (index & 1) {
            result.unshift(char)
        } else {
            result.push(char)
        }
    } else {
        if (index & 1) {
            result.push(char)
        } else {
            result.unshift(char)
        }
    }
})

print(result.join``)
