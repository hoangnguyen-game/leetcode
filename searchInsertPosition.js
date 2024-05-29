// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */

// //we should use binary search algorithm

// var searchInsert = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return left;
// };


// let nums = [1,3,5,6,8,10], target = 7;
// // Output: 4
// console.log(searchInsert(nums, target));


function binarySearching(arr, target) {
    let left = 0; 
    let right =  arr.length - 1; 

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (mid === target) {
            return mid;
        } else if (mid < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

let nums = [1,3,5,6,8], target = 9;
// Output: 4
console.log(binarySearching(nums, target));

