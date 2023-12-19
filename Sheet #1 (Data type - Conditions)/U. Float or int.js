x = readline();

print(parseInt(x) == x ? `int ${parseInt(x)}` : `float ${parseInt(x)} ${Number(x % 1).toFixed(3)}`)