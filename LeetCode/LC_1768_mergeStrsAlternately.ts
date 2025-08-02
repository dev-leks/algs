// Two pointers, Easy
// Time: O(n + m)
// Space: O(n + m)
function mergeAlternately(word1: string, word2: string): string {
    let res = ''
    let p1 = 0
    let p2 = 0

    while (p1 < word1.length || p2 < word2.length) {
        if (p1 < word1.length) {
            res += word1[p1]
            p1++
        }

        if (p2 < word2.length) { 
            res += word2[p2]
            p2++
        }
    }

    return res
};
