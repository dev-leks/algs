function mostFrequentEven(nums: number[]): number {
    const evenNumsMap = {}

    let maxEven = -1
    let maxEvenCount = 0
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]

        if (num % 2 == 0) {
            const count = num in evenNumsMap ? evenNumsMap[num] + 1 : 1
            evenNumsMap[num] = count

            if (count == maxEvenCount) {
                maxEvenCount = count
                maxEven = num > maxEven ? maxEven : num 
            } else if (count >= maxEvenCount) {
                maxEvenCount = count
                maxEven = num
            }
        }
    }
    
    return maxEven
};
