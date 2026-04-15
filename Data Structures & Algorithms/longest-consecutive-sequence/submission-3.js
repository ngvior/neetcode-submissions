class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // 0,1,3,5,6,7,8,9
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        nums = nums.sort((a, b) => a - b)
        const map = {}
        let seqStart
        for (let i = 0; i < nums.length; i++) {
            const cur = nums[i]
            const prev = nums[i - 1]
            if ((!prev && prev !== 0) || cur !== prev) {
            if (prev + 1 === cur) {
                map[seqStart] += 1
                } else {
                    map[cur] = 1
                    seqStart = cur
            }
            }
        }
        return Math.max(...Object.values(map))
    }
}
