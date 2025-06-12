function diagonalDifference(arr) {
    // Write your code here
    let length = arr.length
    
    let firstSum = 0
    let secondSum = 0
    let offset = 0
    
    for (let i = 0; i < length; i++) {
        firstSum += arr[i][offset]
        secondSum += arr[i][length - 1 - offset]
        offset++
    }

    const diff = firstSum - secondSum
    
    return diff < 0 ? -1 * diff : diff
}
