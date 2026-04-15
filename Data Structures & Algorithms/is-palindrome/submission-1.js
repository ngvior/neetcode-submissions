class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
        console.log(str)
        return str === str.split('').reverse().join('')
    }
}
