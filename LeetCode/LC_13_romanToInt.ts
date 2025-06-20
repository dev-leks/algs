const romanNumberMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

// Time: O(n) Space: O(1)
function romanToInt(s: string): number {
    let res = 0;
    let prevNum = -1;
    
    for (let i = s.length - 1; i >= 0; i--) {
        const num = romanNumberMap[s[i]];

        if (prevNum > num) {
            res -= num;
        } else {
            res += num;
        }

        prevNum = num;
    }

    return res;
};
