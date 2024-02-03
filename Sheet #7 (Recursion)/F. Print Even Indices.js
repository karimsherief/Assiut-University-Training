var n = +readline()
var arr = readline().split` `.map(x => +x)

PrintEvenIndices(arr, 0, n)
function PrintEvenIndices(arr, i, n) {
    if (i === n) return;
    PrintEvenIndices(arr, i + 1, n)
    if (i % 2 === 0) write(arr[i],'')
}