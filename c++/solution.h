#pragma once
#include <vector>
#include <string>

class Solution {
private:
    std::vector<int> nums;
    int target;

public:
    Solution(const std::vector<int>& nums, int target);

    std::vector<int> BruteForceTwoSum() const;
    std::vector<int> OptimizedTwoSum() const;
    bool IsPalindrome(int x) const;
    std::vector<int> twoSum() const; 
    int romanToInt(std::string s); 
    static void check();
    std::string longestCommonPrefix(std::vector<std::string>& strs);
    bool isValid(std::string s);
    int climbStairs(int n);
        

        
};
