var id = +readline()
var row = Math.trunc(id / 4);
print(row, row & 1 ? 3 - id % 4 : id % 4)
