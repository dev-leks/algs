// Sorting, Intervals, Medium
// Time: O(nlog(n))
// Space: O(log(n)) - sorting
function merge(intervals: number[][]): number[][] {
  intervals.sort((interval1, interval2) => interval1[0] - interval2[0]);

  const output: number[][] = [];
  let mergedInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (mergedInterval[1] >= intervals[i][0]) {
      mergedInterval = [mergedInterval[0], Math.max(mergedInterval[1], intervals[i][1])];
    } else {
      output.push(mergedInterval);
      mergedInterval = intervals[i];
    }
  }

  output.push(mergedInterval);

  return output;
};
