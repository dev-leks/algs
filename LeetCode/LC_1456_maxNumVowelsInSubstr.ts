// Sliding window, Medium
// Space: O(1)
// Time: O(n)
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

function maxVowels(s: string, k: number): number {
    let vowelsCount = 0;
    for (let i = 0; i < k; i++) {
        if (VOWELS.has(s[i])) vowelsCount += 1;
    }

    if (vowelsCount === k) return vowelsCount;

    let maxVowels = vowelsCount;

    for (let i = k; i < s.length; i++) {
        const firstChar = s[i - k];

        if (VOWELS.has(firstChar)) vowelsCount -= 1;
        if (VOWELS.has(s[i])) vowelsCount += 1;

        maxVowels = Math.max(maxVowels, vowelsCount);

        if (maxVowels === k) return maxVowels;
    }

    return maxVowels;
};
