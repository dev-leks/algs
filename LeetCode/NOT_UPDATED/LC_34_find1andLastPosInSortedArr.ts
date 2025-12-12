// Binary Search, Medium
function searchRange(nums: number[], target: number): number[] {
    let min = 0;
    let max = nums.length - 1;
    const lastIndex = nums.length - 1;
    let startPosition = -1;
    let endPosition = -1;

    while (min <= max && startPosition < 0) {
        const avg = Math.floor((min + max) / 2);
        
        if (nums[avg] === target) {
            if (avg === 0 || (avg > 0 && nums[avg - 1] !== target)) {
                startPosition = avg;
            } else {
                max = avg - 1;
            }
        }

        if (nums[avg] < target) min = avg + 1;
        if (nums[avg] > target) max = avg - 1;
    }

    if (startPosition > -1) {
        min = startPosition;
        max = lastIndex;

        while (min <= max && endPosition < 0) {
            const avg = Math.floor((min + max) / 2);

            if (nums[avg] === target) {
                if (avg === lastIndex || (avg < lastIndex && nums[avg + 1] !== target)) {
                   endPosition = avg;
                } else {
                   min = avg + 1;
                }
            }

            if (nums[avg] < target) min = avg + 1;
            if (nums[avg] > target) max = avg - 1;
        }
    }

    return [startPosition, endPosition];
};
