var word = readline()
print(Math.min(word.match(/e/gi).length, word.match(/g/gi).length, word.match(/y/gi).length, word.match(/p/gi).length, word.match(/t/gi).length))