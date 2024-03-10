var liss = readline()
var stones = readline()
var steps = 1;

for (var i = 0; i < stones.length; i++) {
    if (stones[i] === liss[steps - 1]) {
        steps++
    }
}
print(steps)