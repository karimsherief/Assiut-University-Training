var line;
var isStartMultiComment = false;
while (line = readline()) {
    var isNotComment = false;
    if (!line.length || line === " ") {
        continue;
    }

    for (var i = 0; i < line.length; i++) {
        if (line[i] === '/' && line[i + 1] === '/' && !isStartMultiComment) {
            break;
        }
        else if (line[i] === '/' && line[i + 1] === '*') {
            i++;
            isStartMultiComment = true;
        }
        else if (line[i] === '*' && line[i + 1] === '/' && isStartMultiComment) {
            i++;
            isStartMultiComment = false;
        }
        else if (!isStartMultiComment) {
            print(line[i]);
            isNotComment = true;
        }
    }

    if (isNotComment && !isStartMultiComment) {
        print("")
    }
}
