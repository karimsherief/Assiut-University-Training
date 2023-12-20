char = readline();

print(char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1))