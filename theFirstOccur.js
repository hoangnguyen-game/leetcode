/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let j = 1;

            while (j < needle.length && haystack[i + j] === needle[j]) {
                j++;
            }

            if (j === needle.length) {
                return i;
            }
        }   
    }

    return -1;
};

console.log(strStr("sadbutsad", "sad"));
const a = "helloooo"
console.log(a.indexOf("ll"));