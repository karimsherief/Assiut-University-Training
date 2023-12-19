x = readline();

if (x >= 'A' && x <= 'Z') {
    print(
        `ALPHA
IS CAPITAL`
    )
} else if (x >= "a" && x <= 'z') {
    print(
        `ALPHA
IS SMALL`
    )
} else {
    print("IS DIGIT")
}