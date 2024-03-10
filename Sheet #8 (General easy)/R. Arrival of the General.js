var n = +readline();
var soldires = readline().split` `.map(x => +x);
var minHeight = Math.min(...soldires),
    maxHeight = Math.max(...soldires);

var firstSoldierIndex = soldires.indexOf(maxHeight),
    lastSoldierIndex = soldires.lastIndexOf(minHeight);

lastSoldierIndex += firstSoldierIndex > lastSoldierIndex
print(firstSoldierIndex,lastSoldierIndex)
print(((n - 1) - lastSoldierIndex) + firstSoldierIndex)
