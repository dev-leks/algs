/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// Binary search, Easy
// Time: O(logn)
// Space: O(1)
 function guessNumber(n: number): number {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const res = guess(mid);

        if (res === -1) right = mid - 1;
        else if (res === 1) left = mid + 1;
        else return mid;
    }

    return -1;
};
