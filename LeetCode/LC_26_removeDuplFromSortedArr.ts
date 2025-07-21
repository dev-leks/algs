// Two pointers, Easy
// Time: O(n)
// Space: O(n)
function removeDuplicates(nums: number[]): number {
    let outputPointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i] || i === nums.length - 1) {
            nums[outputPointer] = nums[i];
            outputPointer++;
        }
    }

    return outputPointer;
};
