function isPalindrome(s: string): boolean {
    const ls = s.toLowerCase()

    let leftP = 0
    let rightP = ls.length - 1
    
    while (leftP <= rightP) {
        if (!isAlphOrDigit(ls[leftP])) leftP++
        else if (!isAlphOrDigit(ls[rightP])) rightP--
        else {
            if (ls[leftP] == ls[rightP]) {
                leftP++
                rightP--
            } else {
                return false
            }
        } 
    }

    return true
};

function isAlphOrDigit(char: string): boolean {
    return (char >= "a" && char <= "z") || (char >= "0" && char <= "9")
}
