x = parseFloat(readline());

if (x > 0 && x <= 25) {
    print("Interval [0,25]");
}
else if (x > 25 && x <= 50) {
    print("Interval (25,50]");
}
else if (x > 50 && x <= 75) {
    print("Interval (50,75]");
}
else if (x > 75 && x <= 100) {
    print("Interval (75,100]");
}
else {
    print("Out of Intervals");
}