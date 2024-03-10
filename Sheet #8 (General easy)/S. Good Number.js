var input = readline().split` `.map(x => +x)
var numbers = input[0], k = input[1]
var set = new Set(Array(k + 1).fill(0).map((_, index) => index))

var goodNumbers = 0;
while (numbers--) {
    var number = new Set(readline().split``.map(x => +x).sort((a, b) => a - b))

    goodNumbers += [...set].every(x => [...number].includes(x))
}
print(goodNumbers)