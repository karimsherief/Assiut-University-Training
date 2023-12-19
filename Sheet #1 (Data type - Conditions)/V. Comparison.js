x = readline().split` `

if (x.includes('=')) {
    x = `${x[0]}==${x[2]}`
} else {
    x = x.join``
}

print(eval(x) ? "Right" : "Wrong")