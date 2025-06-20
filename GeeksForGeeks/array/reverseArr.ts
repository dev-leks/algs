const reverseArr = (arr: number[]) => {
    let lastIndex = arr.length - 1;
    
    for (let i = 0; i < lastIndex; i++) {
        const temp = arr[i];
        arr[i] = arr[lastIndex];
        arr[lastIndex] = temp;
        lastIndex--;
    }
};
