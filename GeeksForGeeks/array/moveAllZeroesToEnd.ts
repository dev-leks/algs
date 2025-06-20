 const moveAllZeroesToEnd = (arr: number[]) => {
    let lastNonZeroIndex = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[lastNonZeroIndex];
            arr[lastNonZeroIndex] = temp;
            lastNonZeroIndex++;
        }
    }
 };
