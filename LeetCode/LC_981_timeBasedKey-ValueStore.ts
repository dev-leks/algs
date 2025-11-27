// Hash table + Binary Search (Upper bound), Medium
// Time: set - O(M⋅L), get - O(NLlog(M))
// - M and N are number of calls, L is length of key to hash
// Space: set - O(ML), get - O(1)
//
class TimeMap {
  map: Map<string, Array<[number, string]>>;

  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }

    this.map.get(key)!.push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    if (!this.map.has(key)) return '';

    if (timestamp < this.map.get(key)![0][0]) return '';

    const upperBoundIndex = this.findUpperBound(this.map.get(key)!, timestamp);

    if (upperBoundIndex === -1) return '';

    return this.map.get(key)![upperBoundIndex][1];
  }

  private findUpperBound(arr: Array<[number, string]>, target: number): number {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid][0] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left > 0) {
      return left - 1;
    }

    return -1;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
