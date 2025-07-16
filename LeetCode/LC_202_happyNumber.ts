// Floyd's cycle detection algorithm, Easy
// Time: O((log(n))²)
// Space: O(1)
function isHappy(n: number): boolean {
    let slow = n;
    let fast = n;

    do {
        slow = getSumOfDigitsSquares(slow);
        fast = getSumOfDigitsSquares(getSumOfDigitsSquares(fast));
    } while (fast !== slow);

    return slow === 1;
};

function getSumOfDigitsSquares(num: number) {
    let sum = 0;

    while (num > 0) {
        const digit = num % 10;
        sum += (digit * digit);
        num = Math.floor(num / 10);
    }

    return sum;
}

// Hashmap (Set), Easy (Optimized)
// Time: O((log(n))²)
// Space: O(log(n))
function isHappy2(n: number): boolean {
    if (n === 1 || n === 7) return true;

    const sumSet = new Set<number>();

    while (n) {
        const nArr = String(n).split('');
        let sum = 0;
        for (let i = 0; i < nArr.length; i++) {
            sum += +nArr[i] * +nArr[i];
        }

        if (sum === 1 || sum === 7) return true;

        if (sumSet.has(sum)) return false;

        sumSet.add(sum);
        n = sum;
    }

    return false;
};

// Hashmap, Easy (my first solution)
// Time: O((log(n))²)
// Space: O(log(n))
function isHappy1(n: number): boolean {
    const frequenceMap = new Map<number, number>();

    let currNumber = n;
    while (currNumber) {
        if ((frequenceMap.get(currNumber) ?? 0) > 1) return false;

        const nArr = String(currNumber).split('');
        let sum = 0;
        for (let i = 0; i < nArr.length; i++) {
            sum += +nArr[i] * +nArr[i];
        }

        if (sum === 1) return true;

        frequenceMap.set(currNumber, (frequenceMap.get(currNumber) ?? 0) + 1);
        currNumber = sum;
    }

    return false;
};
