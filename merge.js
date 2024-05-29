// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
//     let i = 0; 
//     let j = 0;
//     const buffer = [];

//     while (i < m && j < n) {
//         if (nums1[i] < nums2[j]) {
//             buffer.push(nums1[i]);
//             i++;
//         } else {
//             buffer.push(nums2[j]);
//             j++;
//         }
//     }

//     while (i < m) {
//         buffer.push(nums1[i]); 
//         i++;
//     }

//     while (j < n) {
//         buffer.push(nums2[j])
//         j++;
//     }

//     return  buffer;
// };

/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums1[i];
            i++;
        } else {
            nums1[k] = nums2[j];
            j++;
        }
        k++;
    }
  
    while (i < m) {
        nums1[k] = nums1[i];
            i++;
            k++;
    }
  
    while (j < n) {
        nums1[k] = nums2[j];
        j++;
        k++;
    }
};
  


let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// Output: [1,2,2,3,5,6]

console.log(nums1, m, nums2, n);

// console.log(nums1);