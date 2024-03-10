var magnets = readline();
var groups = 1,
  prevMagnet = null;
while (magnets--) {
  var magnet = readline();
  if (prevMagnet) {
    groups += magnet !== prevMagnet;
  }
  prevMagnet = magnet;
}

print(groups)