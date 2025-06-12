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
