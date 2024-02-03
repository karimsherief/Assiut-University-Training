var vowels = ['a', 'e', 'i', 'o', 'u']

print(CountVowels(readline(), 0, 0));
function CountVowels(word, i, cnt) {
    if (i === word.length) return cnt;
    if (vowels.includes(word[i].toLowerCase())) return CountVowels(word, i + 1, cnt + 1)
    return CountVowels(word, i + 1, cnt)
}

