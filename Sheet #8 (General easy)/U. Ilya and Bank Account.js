var balance = readline()

print(
    Math.max(
        +balance,
        +balance.slice(0, -1),
        +`${balance.slice(0, -2)}${balance[balance.length - 1]}`
    )
)

