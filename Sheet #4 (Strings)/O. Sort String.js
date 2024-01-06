readline()
var bufferSize = 26;
var buffer = new ArrayBuffer(bufferSize);
var arr = new Int8Array(buffer);

readline().split``.forEach((c) => {
    arr[c.charCodeAt() - 97]++;
})
arr.forEach((el, index) => {
    write(String.fromCharCode(index + 97).repeat(el))
})