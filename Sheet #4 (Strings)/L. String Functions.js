var input = readline().split` `.map(x => +x)
var n = input[0],
    q = input[1]
var word = readline().split``
while (q--) {
    var input = readline().split` `
    var query = input[0]
    switch (query) {
        case "substr":
            var l = +input[1], r = +input[2]
            print(word.slice(Math.min(l, r) - 1, Math.max(l, r)).join``)
            break;
        case "sort":
            var l = +input[1], r = +input[2]
            var substr = word.slice(Math.min(l, r) - 1, Math.max(l, r)).sort()

            word = [...word.slice(0, Math.min(l, r) - 1), ...substr, ...word.slice(Math.max(l, r))]

            break;
        case "back":
            print(word.slice(-1))
            break;
        case "pop_back":
            word.pop()
            break;
        case "front":
            print(word[0])
            break;
        case "reverse":
            var l = +input[1], r = +input[2]
            var substr = word.slice(Math.min(l, r) - 1, Math.max(l, r)).reverse()
            word = [...word.slice(0, Math.min(l, r) - 1), ...substr, ...word.slice(Math.max(l, r))]
            break;
        case "print":
            var pos = +input[1] - 1
            print(word[pos])
            break;
        case "push_back":
            var c = input[1]
            word.push(c)
            break;
    }

}