// Easy O(n) DFS
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const startPixelColor = image[sr][sc];
    const m = image.length;
    const n = image[0].length;

    if (startPixelColor === color) return image;

    function fillNeighbors(image: number[][], sr: number, sc: number, color: number, target: number) {
        if (image[sr][sc] !== target) return image;

        image[sr][sc] = color;
        if (sr > 0 ) fillNeighbors(image, sr - 1, sc, color, target);
        if (sc < n - 1) fillNeighbors(image, sr, sc + 1, color, target);
        if (sr < m -1) fillNeighbors(image, sr + 1, sc, color, target);
        if (sc > 0) fillNeighbors(image, sr, sc - 1, color, target);
    }

    fillNeighbors(image, sr, sc, color, startPixelColor);

    return image;
};
