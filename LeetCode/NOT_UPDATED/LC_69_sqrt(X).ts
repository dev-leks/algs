// Binary Search, Easy
function mySqrt(x: number): number {
    if (x == 1) return 1;

    let min = 0;
    let max = Math.floor(x / 2);

    while (min <= max) {
        const avg = Math.floor((min + max) / 2);

        if (avg * avg === x) return avg;
        if (avg * avg > x) max = avg - 1;
        if (avg * avg < x) min = avg + 1;
    }

    return min - 1;
};
