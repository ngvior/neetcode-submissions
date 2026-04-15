class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}
        for (let i = 0; i < nums.length; i++) {
            const n = target - nums[i]
            if (map[n] >= 0) return [map[n], i]
            map[nums[i]] = i
        }
        return []
    }
}
