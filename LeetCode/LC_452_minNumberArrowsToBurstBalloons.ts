// Intervals (Sorting by ending values + Greedy), Medium
// Time: O(nlogn)
// Space: O(1)
function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);

  let arrowsCount = 1;
  let prevPointEnd = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > prevPointEnd) {
      arrowsCount++;
      prevPointEnd = points[i][1];
    }
  }

  return arrowsCount;
};
