var Key = "PgEfTYaWGHjDAmxQqFLRpCJBownyUKZXkbvzIdshurMilNSVOtec#@_!=.+-*/"
var Original = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var map1 = {}, map2 = {}
Key.split``.forEach((el, i) => {
    map1[el] = Original[i]
    map2[Original[i]] = el
})
var q = +readline()

if (q === 1) {
    print(readline().split``.map(c => map2[c]).join``)
} else {
    print(readline().split``.map(c => map1[c]).join``)
}