// Stack, Medium
// Time: O(n)
// Space: O(n)
function decodeString(s: string): string {
    const stack: string[] = [];
    
    for (const char of s) {
        if (char !== ']') {
            stack.push(char);
            continue;
        }

        let substr = '';
        while (stack[stack.length - 1] !== '[') {
            substr = stack.pop() + substr;
        }
        stack.pop();

        let k = '';
        while (!isNaN(+stack[stack.length - 1])) {
            k = stack.pop() + k;
        }

        for (let i = 0; i < +k; i++) {
            stack.push(substr);
        }
    }

    return stack.join('');
};

// Recursion, Medium (From ChatGPT)
// Time: O(n)
// Space: O(n)
function decodeString2(s: string): string {
    // Helper function to find the matching closing bracket
    function findClosingBracketIndex(start: number): number {
        let balance = 1; // Tracks how many '[' are open
        for (let i = start + 1; i < s.length; i++) {
            if (s[i] === '[') balance++;
            if (s[i] === ']') balance--;
            if (balance === 0) return i; // We found the matching ']'
        }
        throw new Error("Invalid input string"); // This should not happen as input is guaranteed valid
    }

    // Base case: If no '[' exists in the string, return it as is.
    if (!s.includes('[')) {
        return s;
    }

    let res = '';  // Result string
    let i = 0;     // Pointer through the string
    
    while (i < s.length) {
        if (!isNaN(+s[i])) {
            // Parse the number k
            let k = 0;
            while (i < s.length && !isNaN(+s[i])) {
                k = k * 10 + +s[i];
                i++;
            }
            
            // Now i points to '['
            const start = i + 1;
            const end = findClosingBracketIndex(start);
            
            // Recursively decode the string inside the brackets
            const decodedSubstring = decodeString(s.substring(start, end));
            
            // Repeat decoded substring k times and add to result
            res += decodedSubstring.repeat(k);
            
            // Move pointer past the closing ']'
            i = end + 1;
        } else {
            // Regular character, add to result
            res += s[i];
            i++;
        }
    }
    
    return res;
}
