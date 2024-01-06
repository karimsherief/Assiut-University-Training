function isPlandrome(word) {
    for (var i = 0, j = word.length - 1; i < j; i++, j--) {
        if (word[i] !== word[j]) {
            return false
        }
    }
    return true;
}

print(isPlandrome(readline()) ? "YES" : "NO")