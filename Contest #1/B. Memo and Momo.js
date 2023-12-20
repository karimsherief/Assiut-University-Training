input = readline().split` `.map(x => +x)

memo = input[0], momo = input[1], k = input[2]

print(checkWinner())

function checkWinner() {
    if (memo % k === 0 && momo % k === 0)
        return "Both";

    if (memo % k === 0)
        return "Memo";

    if (momo % k === 0)
        return "Momo";

    return "No One";
}