var n = +readline()
print(Math.min(Math.abs(Math.trunc((1 + Math.sqrt(1 + 4 * n * 2)) / 2)),
    Math.abs(Math.trunc((1 - Math.sqrt(1 + 4 * n * 2)) / 2))))