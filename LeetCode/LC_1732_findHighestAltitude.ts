// Prefix sum, Easy
// Space: O(1)
// Time: O(n)
function largestAltitude(gain: number[]): number {
    let currentAltitude = 0;
    let maxAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        maxAltitude = Math.max(maxAltitude, currentAltitude);
    }

    return maxAltitude;
};

// Prefix sum with array, Easy
// Space: O(n)
// Time: O(n)
function largestAltitudeArray(gain: number[]): number {
    const altitudes = [0];
    let maxAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        altitudes.push(altitudes[i] + gain[i]);
        maxAltitude = Math.max(maxAltitude,altitudes[i + 1]);
    }

    return maxAltitude;
};
