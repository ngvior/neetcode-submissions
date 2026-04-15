class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const sMap = {}, tMap = {}
        for (let i = 0; i < s.length; i++) {
            sMap[s[i]] = (sMap[s[i]] || 0) + 1
            tMap[t[i]] = (tMap[t[i]] || 0) + 1
        }
        for (const k in sMap) {
            if (sMap[k] !== tMap[k]) return false
        }
        return true
    }
}
