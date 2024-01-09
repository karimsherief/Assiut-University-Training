readline()
var nums = readline().split` `.map(x => +x)

print(`The maximum number : ${getMaxNum(nums)}
The minimum number : ${getMinNum(nums)}
The number of prime numbers : ${getPrimeNums(nums)}
The number of palindrome numbers : ${getPlandiromeNums(nums)}
The number that has the maximum number of divisors : ${getMaxNumberDivisors(nums)}`)

function getMaxNum(nums) {
    return Math.max(...nums)
}
function getMinNum(nums) {
    return Math.min(...nums)
}
function isPrime(num) {
    if (num === 1) {
        return false
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
function getPrimeNums(nums) {
    return nums.filter(isPrime).length
}
function isPlandirome(num) {
    return num.toString().split``.reverse().join`` == num
}
function getPlandiromeNums(nums) {
    return nums.filter(isPlandirome).length
}
function getDivisors(num) {
    var divisors = 0
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors++;
        }
    }

    return divisors
}
function getMaxNumberDivisors(nums) {
    var maxDivisors = 0;
    var ans = nums[0];
    nums.forEach(num => {
        var divisors = getDivisors(num);
        if (divisors >= maxDivisors) {
            maxDivisors = divisors;
            ans = num;
        } else if (divisors === maxDivisors && num > ans) {
            ans = num;
        }
    })
    return ans;
}