var prevLetter = 'a'
print(
    readline().split``.reduce((acc, curr) => {
        var diff = Math.abs(prevLetter.charCodeAt() - curr.charCodeAt())
        prevLetter = curr
        return acc + Math.min(diff, 26 - diff)
    }, 0)
)
