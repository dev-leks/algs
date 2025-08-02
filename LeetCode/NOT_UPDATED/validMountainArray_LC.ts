function validMountainArray(arr: number[]): boolean {
    let topReached = false
    let isMountain = false

    if (arr.length < 3) return false

    for (let i = 0; i < arr.length; i++) {
        if (topReached) {
            if (arr[i] >= arr[i - 1]) {
                isMountain = false
                break
            }
        } else {
            if (arr[i] <= arr[i - 1]) {
                isMountain = false
                break
            }
        }

        if (i > 0 && i < arr.length -1 && arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            topReached = true
            isMountain = true
        }
    }

    return isMountain
};
