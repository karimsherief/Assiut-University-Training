var Circle = function (x1, y1, x2, y2) {
    this.point1 = {
        x: x1,
        y: y1
    }
    this.point2 = {
        x: x2,
        y: y2
    }
    this.r = getDistance(this.point1, this.point2) / 2
}
Circle.prototype.middlePoint = function () {
    return {
        x: (this.point1.x + this.point2.x) / 2,
        y: (this.point1.y + this.point2.y) / 2
    }
}
function getDistance(point1, point2) {
    return Math.sqrt((point1.x - point2.x) * (point1.x - point2.x) + (point1.y - point2.y) * (point1.y - point2.y))
}
var circle1 = new Circle(...readline().split` `.map(x => +x))
var circle2 = new Circle(...readline().split` `.map(x => +x))

var distance = getDistance(circle1.middlePoint(), circle2.middlePoint())

print(distance <= circle1.r + circle2.r ? "YES" : "NO")