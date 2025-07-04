#include <iostream>
#include "Solution.h"

int main() {
    std::vector<int> nums = {2, 7, 11, 15};
    int target = 9;

    Solution solver(nums, target);
    // std::vector<std::string> input = {"flower", "flow", "flight"};
    // std::string rs = solver.longestCommonPrefix(input);

    int rs = solver.climbStairs(5);
    std::cout <<"result: " << rs << std::endl;

    // std::vector<int> ts = solver.twoSum();
    // std::cout << "ket qua " << ts[0] << ts[1] << std::endl;

    // auto res1 = solver.BruteForceTwoSum();
    // std::cout << "BruteForce: [" << res1[0] << ", " << res1[1] << "]\n";

    // int x = 121;
    // std::cout << "IsPalindrome(" << x << ") = " << std::boolalpha << solver.IsPalindrome(x) << "\n";


    return 0;
}