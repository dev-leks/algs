// String (Easy)
// Time Complexity: O(n)
// Space Complexity: O(n)
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const lettersMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        lettersMap.set(letter, (lettersMap.get(letter) ?? 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        const letter = t[i];

        if (!lettersMap.has(letter)) {
            return false;
        }

        const count = lettersMap.get(letter);

        if (count > 1) {
            lettersMap.set(letter, count - 1);
        } else {
            lettersMap.delete(letter);
        }
    }

    return lettersMap.size === 0;
};
