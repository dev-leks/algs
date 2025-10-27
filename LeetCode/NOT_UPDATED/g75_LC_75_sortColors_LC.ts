const colorsKeys = [0, 1, 2]

function sortColors1(nums: number[]): void {
    const countsMap = new Map([[0, 0], [1, 0], [2, 0]])

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i]
        countsMap.set(key, countsMap.get(key) || 0 + 1)
    }

    let i = 0 
    for (const colorKey of colorsKeys) {
        let count = countsMap.get(colorKey)

        while (count) {
            nums[i] = colorKey
            count--
            i++
        }
    }
};

namespace BetterSortColors {
  const RED_COLOR = 0
  const WHITE_COLOR = 1
  const BLUE_COLOR = 2

  function sortColors(nums: number[]): void {
    let leftPointer = 0
    let rightPointer = nums.length - 1

    let i = 0
    while (i <= rightPointer) {
      const num = nums[i]

      if (num === RED_COLOR) {
        swap(nums, i, leftPointer)
        leftPointer++
        i++
      }

      if (num === WHITE_COLOR) {
        i++
      }

      if (num === BLUE_COLOR) {
        swap(nums, i, rightPointer)
        rightPointer--
      }
    }
  };

  function swap(arr: number[], firstIndex: number, secondIndex: number): void {
    const temp = arr[firstIndex]
    arr[firstIndex] = arr[secondIndex]
    arr[secondIndex] = temp
  }
}
