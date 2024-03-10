var teams = []
var n = readline()
var freq = new Array(3).fill(0)
var students = readline().split` `.map((student, index) => {
    freq[student - 1]++;
    return +student
})

print(Math.min(...freq))
for (var i = 0; i < students.length; i++) {
    var flag = true;
    if (freq[students[i] - 1]) {

        for (var j = 0; j < teams.length; j++) {
            if (!teams[j][students[i]]) {
                teams[j][students[i]] = i + 1
                flag = false
                break;
            }
        }
        if (flag) {

            teams.push({
                [students[i]]: i + 1
            })
        }
        freq[students[i] - 1]--;
    }
}

for (var i = 0; i < teams.length; i++) {
    if (teams[i].length < 3) continue
    for (key in teams[i]) {
        write(teams[i][key], '')
    }
    print("")
}
