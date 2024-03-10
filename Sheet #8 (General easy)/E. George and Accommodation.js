var n = readline();
var rooms = 0;
while (n--) {
  var freePlace = readline().split` `.reduce((a, b) => Math.abs(+a - +b));
  rooms += freePlace >= 2;
}
print(rooms);   
