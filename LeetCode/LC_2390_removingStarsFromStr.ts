// Stack, Medium (optimized with help)
// Time: O(n)
// Space: O(n)
function removeStars(s: string): string {
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    
    return stack.join('');
};

// Stack, Medium (my frist solution)
// Time: O(n^2)
// Space: O(n)
function removeStars1(s: string): string {
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }

    let res = '';
    while (stack.length > 0) {
        let lastInStack = stack[stack.length - 1];
        
        if (lastInStack !== '*') {
            stack.pop();
            res = lastInStack + res;
            continue;
        }

        let removedStars = 0;
        do {
            stack.pop();
            removedStars++;
            lastInStack = stack[stack.length - 1];
        } while (lastInStack === '*')

        while (removedStars > 0) {
            if (stack[stack.length - 1] == '*') removedStars++;
            else removedStars--;
            stack.pop();
        }
    }

    return res;
};
