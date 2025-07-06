// Easy
// Time: O(n)
// Space: O(1) (do not include input and output space)
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandies = Math.max(...candies);

    return candies.map(kidCandies => kidCandies + extraCandies >= maxCandies)
};
