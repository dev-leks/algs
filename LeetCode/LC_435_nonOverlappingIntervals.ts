// Intervals (Sorting by ending values + Greedy), Medium (Expected solution)
// Time: O(nlogn)
// Space: O(1)
function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);

  let overlappingCount = 0;
  let prevEnd  = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      overlappingCount++;
      // NOTE: For sorting by starting values we should set here:
      // prevEnd = Math.min(prevEnd, intervals[i][1])
    } else {
      prevEnd = intervals[i][1];
    }
  }

  return overlappingCount;
};

// Intervals (Sorting by ending values + Greedy), Medium (My first solution)
// Time: O(nlogn)
// Space: O(1)
function eraseOverlapIntervals1(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);

  let overlappingCount = 0;
  let prevRange  = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    // Check if the current interval overlaps with the previous range
    if (interval[0] < prevRange[1] && interval[1] > prevRange[0]) {
      overlappingCount++;
      prevRange = interval[1] < prevRange[1] ? interval : prevRange;
    } else {
      prevRange = interval;
    }
  }

  return overlappingCount;
};
