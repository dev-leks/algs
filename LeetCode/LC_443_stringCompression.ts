// Two pointers (even three:)), Medium
// Time: O(n)
// Space: O(1)
function compress(chars: string[]): number {
    let writeIndex = 0;
    let groupStart = 0;

    for (let i = 0; i < chars.length; i++) {
        if (chars[i + 1] !== chars[i] || i === chars.length - 1) {
            chars[writeIndex++] = chars[i];

            const groupSize = i - groupStart + 1;

            if (groupSize > 1) {
                for (const digit of String(groupSize)) {
                    chars[writeIndex++] = digit;
                }
            }

            groupStart = i + 1;
        }
    }

    return writeIndex;
};
