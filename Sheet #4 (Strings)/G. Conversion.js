function convertCase(str) {
    var convertedStr = "";
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (char === char.toUpperCase()) {
            convertedStr += char.toLowerCase();
        } else {
            convertedStr += char.toUpperCase();
        }
    }
    return convertedStr;
}

var input = readline();
var converted = convertCase(input);
console.log(converted); 
