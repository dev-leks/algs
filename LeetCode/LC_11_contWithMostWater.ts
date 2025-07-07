// Two pointers, Medium
// Time: O(n)
// Space: O(1)
function maxArea(height: number[]): number {
    let maxWater = 0;
    let p1 = 0;
    let p2 = height.length - 1;

    while (p1 < p2) {
        const width = p2 - p1;
        const minHeight = Math.min(height[p1], height[p2]);
        const water = minHeight * width;
        maxWater = Math.max(maxWater, water);

        if (height[p1] <= height[p2]) {
            p1++;
        } else {
            p2--;
        }
    }

    return maxWater;
};
