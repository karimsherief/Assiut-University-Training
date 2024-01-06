
var bufferSize = 26;
var buffer = new ArrayBuffer(bufferSize);
var freq = new Int8Array(buffer);
readline().split``.sort().forEach(c => {
    freq[c.charCodeAt(0) - 96] = freq[c.charCodeAt(0) - 96] ? freq[c.charCodeAt(0) - 96] + 1 : 1
})

freq.forEach((val, index) => {
    if (val) {
        print(`${String.fromCharCode(index + 96)} : ${val}`)
    }
})
