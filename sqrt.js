/*69. Sqrt(x)
Easy
Topics
Companies
Hint
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1*/

/*
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) {
        return x; // Trả về kết quả trực tiếp cho các trường hợp đơn giản
    }

    let left = 1;
    let right = Math.floor(x / 2); // Giảm phạm vi tìm kiếm

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid; // Tìm thấy căn bậc hai chính xác
        } else if (square < x) {
            left = mid + 1; // Tìm kiếm ở nửa bên phải
        } else {
            right = mid - 1; // Tìm kiếm ở nửa bên trái
        }
    }

    return right; // Trả về kết quả gần đúng nhất
};

console.log(mySqrt(25));
