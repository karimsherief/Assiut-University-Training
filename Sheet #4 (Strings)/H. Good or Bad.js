var test = readline()

while (test--) {
    var s = readline()

    print(~s.search("010") || ~s.search("101") ? "Good" : "Bad")
}