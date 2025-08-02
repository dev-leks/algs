const colorsKeys = [0, 1, 2]

function sortColors1(nums: number[]): void {
    const countsMap = new Map([[0, 0], [1, 0], [2, 0]])

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i]
        countsMap.set(key, countsMap.get(key) || 0 + 1)
    }

    let i = 0 
    for (const colorKey of colorsKeys) {
        let count = countsMap.get(colorKey)

        while (count) {
            nums[i] = colorKey
            count--
            i++
        }
    }
};
