var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let j = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[j] !== nums[i]) {
            j++;
            nums[j] = nums[i];
        }
    }
    
    let newNums = nums.slice(0, j + 1);
    return newNums;
            
};


let nums = [0,0,1,1,1,2,2,3,3,4];
let newLength = removeDuplicates(nums);

console.log(newLength); 