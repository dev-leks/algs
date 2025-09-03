const DIGIT_TO_LETTERS_MAP: Record<number, string[]> = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

// Backtracking, Medium
// Time: O(4^n * n) - 4^n combinations, n - string concatenation
// Space: O(n * 4^n) - n recursion stack + 4^n combinations array
function letterCombinations(digits: string): string[] {
    if (!digits) return [];

    const combinations: string[] = [];

    function getCombinations(index: number, prevCombination: string) {
        if (index === digits.length) {
            combinations.push(prevCombination);
            return;
        }

        for (const char of DIGIT_TO_LETTERS_MAP[+digits[index]]) {
            getCombinations(index + 1, prevCombination + char);
        }
    }

    getCombinations(0, '');

    return combinations;
};
