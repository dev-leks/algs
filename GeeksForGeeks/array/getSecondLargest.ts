export const getSecondLargest = (arr: number[]) => {
    let theLargest = arr[0];
    let secondTheLargest = -1;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > theLargest) {
            secondTheLargest = theLargest;
            theLargest = arr[i];
        } else if (arr[i] > secondTheLargest && arr[i] !== theLargest) {
            secondTheLargest = arr[i];
        }
    }
    
    return secondTheLargest;
};
