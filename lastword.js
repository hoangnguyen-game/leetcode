/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    len = s.length;

    while (len > 0 && s[len - 1] === " ") {
        len--;
    }

    let lastWord = 0;
    while (len > 0 && s[len - 1] !== " ") {
        lastWord++;
        len--;
    }

    return lastWord;
};


let s = "haong dep trai     ";

console.log(lengthOfLastWord(s));