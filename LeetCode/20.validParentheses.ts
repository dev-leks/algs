
function isValid(s: string): boolean {
    if (s.length <= 1) return false

    const stack: string[] = []

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
            continue
        }

        if (!stack.length) return false

        const lastInStack = stack.pop()
        
        if (
            (char === ")" && lastInStack !== "(") || 
            (char === "}" && lastInStack !== "{") ||
            (char === "]" && lastInStack !== "[")
        ) {
            return false
        }
    }

    return !stack.length
};



const OPEN_BRACES = ["(", "{", "["]
const CLOSE_BRACES = [")", "}", "]"]

const bracesPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
}

function isValid2(s: string): boolean {
    if (s.length <= 1) return false

    const stack: string[] = []

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (OPEN_BRACES.includes(char)) {
            stack.push(char)
            continue
        }

        if (!stack.length) return false

        const lastInStack = stack.pop()
        
        if (bracesPairs[char] !== lastInStack) {
            return false
        }
    }

    return !stack.length
};
