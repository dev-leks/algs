// HashMap O(n) space
function majorityElement1(nums: number[]): number {
    const countsMap = new Map<number, number>()
    const limit = Math.round(nums.length / 2)

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const count = (countsMap.get(num) || 0) + 1

        if (count >= limit) {
            return num
        }

        countsMap.set(num, count)
    }

    return -1
};

// O(1) space
function majorityElement(nums: number[]): number {
    let res = 0
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (!count) res = num

        count += (res == num ? 1 : -1)
    }

    return res
};
