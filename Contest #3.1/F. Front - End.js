var n = readline();
var nums = readline().split` `

while (nums.length > 1) {
    write(nums.shift(), nums.pop())
}
if (n & 1) {
    write(nums.pop())
}