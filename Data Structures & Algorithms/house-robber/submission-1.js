class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let rob1 = 0, rob2 = 0
        for (const n of nums) {
            const temp = Math.max(n + rob1, rob2)
            rob1 = rob2
            rob2 = temp
        }
        return rob2
    }
}
