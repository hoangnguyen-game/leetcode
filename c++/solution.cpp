#include "Solution.h"
#include <unordered_map>
#include <string>
#include <iostream>
#include <stack>

Solution::Solution(const std::vector<int>& nums, int target)
    : nums(nums), target(target) {}

std::vector<int> Solution::BruteForceTwoSum() const {
    for (int i = 0; i < nums.size(); i++) {
        for (int j = i + 1; j < nums.size(); j++) {
            if (nums[i] + nums[j] == target)
                return { i, j };
        }
    }
    return { -1, -1 };
}

std::vector<int> Solution::OptimizedTwoSum() const {
    std::unordered_map<int, int> map;
    for (int i = 0; i < nums.size(); i++) {
        int check = target - nums[i];
        if (map.count(check))
            return { map[check], i };
        map[nums[i]] = i;
    }
    return { -1, -1 };
}

bool Solution::IsPalindrome(int x) const {
    std::string s = std::to_string(x);
    for (int i = 0; i < s.size() / 2; i++) {
        if (s[i] != s[s.size() - 1 - i])
            return false;
    }
    return true;
}

std::vector<int> Solution::twoSum() const {
    std::unordered_map<int, int> map_set;
    
    for (int i = 0; i < nums.size(); i++) {
        int check = target - nums[i];
        if (map_set.count(check)) {
            return {map_set[check], i};
        }
        map_set[nums[i]] = i;
    }

    
    return {-1, -1};
}

int Solution::romanToInt(std::string s) {
    std::unordered_map<char, int> roman_map = {
        {'I', 1},
        {'V', 5},
        {'X', 10},
        {'L', 50},
        {'C', 100},
        {'D', 500},
        {'M', 1000}

    };
    int count = 0;
    for (int i = 0; i < s.size(); i++) {
        if (roman_map[s[i] < roman_map[s[i + 1]]]) {
            count -= roman_map[s[i]];
        } else {
            count += roman_map[s[i]];
        }
    }

    return count;
}

void Solution::check() {
    std::cout << "checked" << std::endl;
}

std::string Solution::longestCommonPrefix(std::vector<std::string>& strs){
    if (strs.empty()) return "";
    std::string prefix = strs[0];

    for (int i = 1; i < strs.size(); i++ ) {
        while (strs[i].find(prefix) != 0) {
            prefix = prefix.substr(0, prefix.length() - 1);

            if (prefix.empty()) return "";
        }   
    }

    return prefix;
} 


bool Solution::isValid(std::string s) {
    std::unordered_map<char, char> pairs = {{'(', ')'}, {'{', '}'}, {'[', ']'}};
    std::stack<char> stack;
    
    for (auto ch : s) {
        if (ch == '(' || ch == '[' || ch == '{') {
            stack.push(ch);
        } else {
            if (stack.empty()) return false;
            if (stack.top() != pairs[ch]) return false;
            stack.pop();
        }
    }

    return stack.empty();

}

int Solution::climbStairs(int n) {
    if (n <= 2 ) return n;
    int n1 = 1;
    int n2 = 2;
    for (int i = 3; i <= n; i++) {
        int n3 = n1 + n2;
        n1 = n2; 
        n2 = n3;
    }

    return n2;
}

