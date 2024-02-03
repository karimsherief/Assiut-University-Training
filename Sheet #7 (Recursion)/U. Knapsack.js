var input = readline().split` `.map(x => +x)
var n = input[0], w = input[1]
var items = []

for (var i = 0; i < n; i++) {
    input = readline().split` `.map(x => +x)
    items.push({
        weight: input[0],
        cost: input[1]
    })
}
print(Knapsack(items, 0, w))
function Knapsack(items, i, weight) {
    if (!weight || i === items.length) return 0

    var w = items[i].weight, c = items[i].cost

    if (w > weight) return Knapsack(items, i + 1, weight)

    return Math.max(
        c + Knapsack(items, i + 1, weight - w), Knapsack(items, i + 1, weight)
    )
}
