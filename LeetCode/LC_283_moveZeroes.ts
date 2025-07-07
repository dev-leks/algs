// Easy
// Space: O(1)
// Time: O(n)
function moveZeroes(nums: number[]): void {
    let nonZeroP = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
           
        const temp = nums[nonZeroP];
        nums[nonZeroP] = nums[i];
        nums[i] = temp;
        nonZeroP++;
    }
};
