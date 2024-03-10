var rounds = readline();
var ans = null;
var ratings = [];

while (rounds--) {
    var rating = readline().split` `.map(x => +x);
    ratings.push(rating);
    var before = rating[0], after = rating[1];

    if (after !== before) {
        ans = "rated";
        break;
    }
}
if (ans != null) {
    print(ans)
} else {
    for (var i = 1; i < ratings.length; i++) {
        if (ratings[i][0] > ratings[i - 1][0]) {
            ans = "unrated";
            break;
        }
    }

    print(ans ? ans : "maybe");
}