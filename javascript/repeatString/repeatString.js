const repeatString = function(word, num) {
    let string = '';
    for(let i = 0; i < num; i++) {
        string += word;
    }
    return string;
}

module.exports = repeatString
