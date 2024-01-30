var n = +readline();

for (var i = 0; i < n; i++) {
    var pascal = 1;
    for (var j = 0; j <= i; j++) {
        write(pascal, "");
        pascal = Math.trunc(pascal * (i - j) / (j + 1));
    }
    print("");
}