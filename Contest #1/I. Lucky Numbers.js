n = readline();

d1 = +n[0], d2 = +n[1];

if (!d2) {
    print("YES")

} else {

    print(d1 % d2 == 0 || d2 % d1 == 0 ? "YES" : "NO");
}