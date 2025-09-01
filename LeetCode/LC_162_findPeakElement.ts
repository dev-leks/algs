// Binary Search, Medium (Expected solution)
// Time: O(log(n))
// Space: O(1)
function findPeakElement(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

// Binary Search, Medium (My solution)
// Time: O(log(n))
// Space: O(1)
function findPeakElement1(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const prev = mid > 0 ? nums[mid - 1] : -Infinity;
        const next = mid < nums.length - 1 ? nums[mid + 1] : -Infinity;

        if (prev < nums[mid] && nums[mid] > next) {
            return mid;
        }

        if (prev > nums[mid]) right = mid - 1;
        else if (next > nums[mid]) left = mid + 1;
    }

    return -1;
};
