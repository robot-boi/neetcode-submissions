class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique_set = new Set();
        for (const num in nums) {
            if (unique_set.has(nums[num])){
                return true;
            }
            unique_set.add(nums[num]);
        }
        return false;
    }
}
