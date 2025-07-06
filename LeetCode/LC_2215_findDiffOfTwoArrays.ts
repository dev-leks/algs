// Easy
// Space O(n + m)
// Time O(n + m)
function findDifference(nums1: number[], nums2: number[]): number[][] {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);
    
    return [
        [...nums1Set].filter(num => !nums2Set.has(num)),
        [...nums2Set].filter(num => !nums1Set.has(num))
    ];
};
