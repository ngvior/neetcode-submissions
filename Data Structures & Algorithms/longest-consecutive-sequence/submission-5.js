class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // 0,1,3,5,6,7,8,9
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        const numsSet = new Set(nums)
        console.log(numsSet)
        const map = {}
        for (const n of numsSet) {
            let cur = n
            let prev = cur - 1
            while (numsSet.has(prev)) {
            cur = prev
            prev = cur - 1
            }
            map[cur] = (map[cur] || 0) + 1
            }
        return Math.max(...Object.values(map))
    }
}
