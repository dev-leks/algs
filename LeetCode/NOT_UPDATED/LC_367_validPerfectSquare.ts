// Binary Search, Easy
// Time: O(log(n))
// Space: O(1)
function isPerfectSquare(num: number): boolean {
    let min = 1;
    let max = num;

    while (min <= max) {
        let avg = Math.floor((min + max) / 2);
        let squared = avg * avg;
        
        if (squared === num) return true;
        if (squared < num) min = avg + 1;
        if (squared > num) max = avg - 1;
    }

    return false;
};
