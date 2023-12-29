readline();

var nums = readline().split` `.map(x => +x)

nums.forEach((num, index) => {
    if (!num) {
        nums = [...nums.slice(0, index).reverse(), ...nums.slice(index)]
    }
})

print(...nums)