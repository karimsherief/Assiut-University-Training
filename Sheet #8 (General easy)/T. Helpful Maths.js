print(
    readline()
        .split`+`
        .sort((a, b) => a - b)
        .join`+`
)