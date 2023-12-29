var n = readline();
var arr = readline().split` `.map(x => +x)
var arr2 = JSON.parse(JSON.stringify(arr))
arr2[0] *= -1;
var cnt = 0, cnt2 = 1;

for (var i = 1; i < n; i++) {
    if ((arr[i - 1] < 0 && arr[i] < 0) || (arr[i - 1] > 0 && arr[i] > 0)) {
        arr[i] *= -1;
        cnt++;
    }
    if ((arr2[i - 1] < 0 && arr2[i] < 0) || (arr2[i - 1] > 0 && arr2[i] > 0)) {
        arr2[i] *= -1;
        cnt2++;
    }
}
print(Math.min(cnt, cnt2));