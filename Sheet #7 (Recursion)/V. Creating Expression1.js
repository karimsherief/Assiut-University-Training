var input = readline().split` `.map(x => +x)
var n = input[0], m = input[1]
var arr = readline().split` `.map(x => +x)
print(CreateExpression(1, arr[0]) ? "YES" : "NO")
function CreateExpression(i,ans) {
    if (i === n) return ans === m;

    var plus = CreateExpression(i + 1, ans + arr[i]);
    var minus = CreateExpression(i + 1, ans - arr[i]);

    return plus || minus
}