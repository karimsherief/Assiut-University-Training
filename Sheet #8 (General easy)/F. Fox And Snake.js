var input = readline().split` `.map((x) => +x);
var rows = input[0],
  cols = input[1];

for (var i = 0, flag = false; i < rows; i++) {
  if (i & 1) {
    if (flag) {
      print(`#${".".repeat(cols - 1)}`);
    } else {
      print(`${".".repeat(cols - 1)}#`);
    }
    flag = 1 - flag;
  } else {
    print("#".repeat(cols));
  }
}
