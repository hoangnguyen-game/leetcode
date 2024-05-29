/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let strX = x.toString();
    let len = strX.length;
    for (let i = 0; i < len / 2; i++) {
        if (strX[i] !== strX[len - i - 1]) {
            return false
        }
    }

    return true;
};

if (isPalindrome(121)) {
    console.log("true");
}

