    var hello = "hello"
    var word = readline()
    for (var i = 0, j = 0; i < word.length && j < hello.length; i++) {
        if (word[i] === hello[j]) {
            j++;
        }
    }

    print(j === hello.length ? "YES" : "NO")