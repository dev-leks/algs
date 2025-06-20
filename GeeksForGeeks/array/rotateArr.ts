 const reverse = (arr: number[], fromIndex: number, toIndex: number) => {
    while (fromIndex < toIndex) {
        const temp = arr[fromIndex];
        arr[fromIndex] = arr[toIndex];
        arr[toIndex] = temp;
        fromIndex++;
        toIndex--;
    }
}

const rotateArr = (arr: number[], d: number) => {
    let itemsToRotate = d % arr.length;
    
    reverse(arr, 0, itemsToRotate - 1);
    reverse(arr, itemsToRotate, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
};
