/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let len = s.length;
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = 0;

    for (let i = 0; i < len; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            total -= roman[s[i]];
        } else {
            total += roman[s[i]];
        }
    }

    return total;
};

let result = romanToInt("IV");
console.log(result);
