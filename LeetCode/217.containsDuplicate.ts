// HashMap
function containsDuplicate1(nums: number[]): boolean {
    if (nums.length <= 1) return false

    const countsMap = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const count = (countsMap.get(num) || 0) + 1

        if (count >= 2) {
            return true
        }

        countsMap.set(num, count)
    }

    return false
};

// Set
function containsDuplicate2(nums: number[]): boolean {
    if (nums.length <= 1) return false

    const uniqueNums = new Set()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        
        if (uniqueNums.has(num)) return true

        uniqueNums.add(num)
    }

    return false
};
