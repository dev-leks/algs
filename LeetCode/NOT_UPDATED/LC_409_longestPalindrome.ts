function longestPalindrome(s: string): number {
    const charsMap = new Map()

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        const count = (charsMap.get(char) || 0) + 1
        charsMap.set(char, count)
    }

    let res = 0
    charsMap.forEach((count) => {
        if (count >= 2) {
            res += Math.floor(count / 2) * 2
        }
    })

    return res < s.length ? res + 1 : res
};
