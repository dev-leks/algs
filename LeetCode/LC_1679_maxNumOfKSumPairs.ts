// Two pointers, Medium
// Space: O(1)
// Time: O(nlog(n)), because of the sort
function maxOperationsTP(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
   
    let operations = 0;
    let leftP = 0;
    let rightP = nums.length - 1;

    while (leftP < rightP) {
        const sum = nums[leftP] + nums[rightP];

        if (sum === k) {
            operations++;
            leftP++;
            rightP--;
        } else if (sum > k) rightP--;
        else leftP++;
    }

    return operations;
};

// Hash table, Medium
// Space: O(n)
// Time: O(n)
function maxOperationsHT(nums: number[], k: number): number {
    const numCounts = new Map();
    let operations = 0;

    for (let i = 0; i < nums.length; i++) {
        const diff = k - nums[i];

        if (numCounts.get(diff)) {
            operations++;
            numCounts.set(diff, numCounts.get(diff) - 1);
        } else {
            numCounts.set(nums[i], (numCounts.get(nums[i]) ?? 0) + 1);
        }
    }

    return operations;
};
