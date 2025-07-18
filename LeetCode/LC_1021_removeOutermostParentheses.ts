// Stack, Easy (My first solution)
// Time: O(n)
// Space: O(n)
function removeOuterParentheses(s: string): string {
    const stack: string[] = [];

    let lastIndex = 0;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(s[i]);
        else stack.pop();

        if (!stack.length) {
            res += s.substring(lastIndex + 1, i);
            lastIndex = i + 1;
        }
    }

    return res;
};


// Without stack, with depth counter (optimized with help)
// Time: O(n)
// Space: O(n)
function removeOuterParentheses2(s: string): string {
    let depth = 0;
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (depth > 0) result += s[i];
            depth++;
        } else {
            depth--;
            if (depth > 0) result += s[i];
        }
    }

    return result;
};
