// Array, Medium (Solution from video)
//  iNum and jNum shouldn't be in correct order,
//  because jNum can contain a value only if it is bigger than iNum.
//  So after the reassigning value of iNum, there is still a smaller
//  value before j.
// Time: O(n)
// Space: O(1)
function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false;

    let iNum = Infinity;
    let jNum = Infinity;

    for (const num of nums) {
        if (num <= iNum) iNum = num;
        else if (num <= jNum) jNum = num;
        else return true;
    }

    return false;
};

// Array, Medium (Solution from video)
// for any k items in sequence
// Time: O(n*k)
// Space: O(1)
function increasingKplet(nums: number[], k: number): boolean {
    if (nums.length < k) return false;

    const increasing: number[] = new Array(k).fill(Infinity);

    for (const num of nums) {
        for (let j = 0; j < k; j++) {
            if (increasing[j] >= num) {
                increasing[j] = num;
                break;
            }
        }

        if (increasing[k - 1] !== Infinity) return true;
    }

    return false;
};

// Array, Medium (Solution from video, naive)
// Time: O(nlog(n)), but for k = 3 O(n)
// Space: O(1)
function increasingTriplet1(nums: number[]): boolean {
    const n = nums.length;
    const lis: number[] = [];

    for (let i = 0; i < n; ++i) {
        let lb = lowerBound(lis, nums[i]);

        if (lb === lis.length) {
            lis.push(nums[i]);
        } else {
            lis[lb] = nums[i];
        }
    }

    return lis.length >= 3;
}

function lowerBound(arr: number[], target: number): number {
    let left = 0, right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
