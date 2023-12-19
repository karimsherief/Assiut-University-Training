ageInDays = +readline();

print(`${parseInt(ageInDays / 365)} years`)
print(`${parseInt((ageInDays % 365) / 30)} months`)
print(`${parseInt((ageInDays % 365) % 30)} days`)
