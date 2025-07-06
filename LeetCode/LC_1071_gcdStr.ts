function gcd(a: number, b: number) {
    if (b === 0) return a;

    return gcd(b, a % b);
}

// Easy
// Time: O(len(str1)+len(str2))
// Space: O(len(str1)+len(str2))
function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return '';

    return str1.substring(0, gcd(str1.length, str2.length));
};
