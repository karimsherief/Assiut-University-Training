var n = +readline()
var arr = readline().split` `.map(x => +x)
LeftMax(arr, n, 0, Number.MIN_SAFE_INTEGER);
function LeftMax(arr, n, i, max) {
    if (i === n) return;

    max = Math.max(max, arr[i]);

    write(max, '')
    LeftMax(arr, n, i + 1, max);
}