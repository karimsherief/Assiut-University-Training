var word = readline().split``;
var plandirome = true;

if (word.length & 1 && word[Math.trunc(word.length / 2)] === '?') word[Math.trunc(word.length / 2)] = 'a';

for (var i = 0, j = word.length - 1; i < j; i++, j--) {
    if ((word[i] !== '?' && word[j] !== '?')) {
        if (word[i] !== word[j]) {
            plandirome = false
            break;
        }
    } else if (word[i] === '?' && word[j] === '?') {
        word[i] = 'a';
        word[j] = 'a';
    } else {
        if (word[i] === '?') {
            word[i] = word[j]
        } else {
            word[j] = word[i]

        }
    }
}

print(plandirome ? word.join`` : -1);