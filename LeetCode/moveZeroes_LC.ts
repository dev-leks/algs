/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let p = 0

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]

        nums[i] = 0

        if (value !== 0) {
            nums[p] = value
            p++
        }
    }
};
