readline();

var nums = readline().split` `.map(x => +x)

var min = nums.indexOf(Math.min(...nums))
var max = nums.indexOf(Math.max(...nums))

nums = nums.map(num => {
    if (num === min) {
        return max;
    }
    if(num === max){
        return min;
    }
    return num
})
