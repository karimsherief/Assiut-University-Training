ans = readline().split` `.reduce((a, b) => +a % 100 * +b % 100, 1)

print(ans <= 9 ? `0${ans}` : ans)