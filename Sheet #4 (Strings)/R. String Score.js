readline()
var s = readline().split``
var score = 0;

for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
        case 'V':
            score += 5
            break;
        case 'W':
            score += 2
            break;
        case 'X':
            i++;
            break;
        case 'Y':
            if (i !== s.length - 1) {
                s.push(s[i + 1])
                i++;
            }
            break;
        case 'Z':
            if (i !== s.length - 1) {
                if (s[i + 1] === 'V') {
                    score = Math.trunc(score / 5);
                    i++;
                }
                else if (s[i + 1] === 'W') {
                    score = Math.trunc(score / 2);
                    i++;
                }
            }
            break;
    }
}

print(score)
