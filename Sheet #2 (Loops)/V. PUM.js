
function PUM(x) {
    var j = 1;
    while (x--) {
        let ans = []
        while (j % 4) {
            ans.push(j++)
        }
        ans.push("PUM")
        print(...ans)
        j++;
    }
}

PUM(+readline())