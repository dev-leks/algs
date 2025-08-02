function findKOr(nums: number[], k: number): number {
    let numsBinary: string[] = []
    for (let i = 0; i < nums.length; i++) {
        numsBinary[i] = toBinary(nums[i])
    }

    let bitCounts: number[] = [];

    let offset = 0
    for (let i = 0; i < nums.length; i++) {
        const num = numsBinary[i]
        
        while (offset < num.length) {
            if (num[num.length - offset - 1] == '1') {
                if (bitCounts[offset]) bitCounts[offset]++
                else bitCounts[offset] = 1
            } else {
                if (!bitCounts[offset]) bitCounts[offset] = 0
            }

            offset++
        }

        offset = 0;
    }

    if (!bitCounts.length) return 0;

    const resBinArr = bitCounts.reduce((res: number[], count: number) => {
        if (count >= k) {
            return [1, ...res];
        }

        return [0, ...res];
    }, [])

    return toDecimal(resBinArr.join(''))
};

function toBinary(num: number): string {
    return Number(num).toString(2)
}

function toDecimal(num: string): number {
    return parseInt(num, 2);
}

console.log(findKOr([7,12,9,8,9,15], 4))
