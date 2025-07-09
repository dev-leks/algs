// Two pointers, Easy
// Space: O(n)
// Time: O(n)
function reverseWords(s: string): string {
    let strArr = s.trim().split(' ').filter(Boolean);
    let p1 = 0;
    let p2 = strArr.length - 1;

    while (p1 < p2) {
        const temp = strArr[p1];
        strArr[p1] = strArr[p2];
        strArr[p2] = temp;
        p1++;
        p2--;
    }

    return strArr.join(' ');
};

// time: O(n) space: O(n) built-in methods
function reverseWordsBuiltIn(s: string): string {
    return s.trim().split(' ').filter(Boolean).reverse().join(' ');
};

// String manipulation
// Space: O(n)
// Time: O(n)
function reverseWordsStringManipulation(s: string): string {
    let trimmed = s.trim();
    let reversed = '';
    let start = trimmed.length - 1;
    let end = start;

    while (start >= 0) {
        while (start >= 0 && trimmed[start] !== ' ') start--;

        reversed += trimmed.substring(start + 1, end + 1) + ' ';

        while (start >= 0 && trimmed[start] === ' ') start--;

        end = start;
    }

    return reversed.trim();
};
