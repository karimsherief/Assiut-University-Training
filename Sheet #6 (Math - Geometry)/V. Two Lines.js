var Line = function (x1, y1, x2, y2) {
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
}
Line.prototype.slope = function () {
    if(this.x1 === this.x2) {
        return "undifined"
    }
    return (this.y1 - this.y2) / (this.x1 - this.x2)
}

var line1 = new Line(...readline().split` `.map(x => +x))
var line2 = new Line(...readline().split` `.map(x => +x))

print(line1.slope() === line2.slope() ? "YES" : "NO")