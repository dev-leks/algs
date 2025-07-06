// Easy
// Time: O(t.length)
// Space: O(1)
function isSubsequence(s: string, t: string): boolean {
    if (!s.length) return true;

    let p1 = 0;
    let p2 = 0;

    while (p1 < s.length && p2 < t.length) {
        if (s[p1] === t[p2]) {
            p1++;
        }
        if (p1 == s.length) {
            return true;
        }

        p2++;
    }

    return false;
};
