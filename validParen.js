/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const pairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (pairs[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }

            const lastOpen = stack.pop();

            if (pairs[lastOpen] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

let testCase = "()[]{}";

console.log(isValid(testCase));