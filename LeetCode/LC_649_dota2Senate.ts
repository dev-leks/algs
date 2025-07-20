// Queue, Medium (With ChatGPT help)
// Time: O(n^2) (in the worst case k number if rounds == number of senate)
// Space: O(n)
function predictPartyVictory(senate: string): string {
    const RQueue: number[] = [];
    const DQueue: number[] = [];
    const n = senate.length;

    for (let i = 0; i < n; i++) {
       if (senate[i] === 'R') RQueue.push(i);
       else DQueue.push(i);
    }

    while (RQueue.length && DQueue.length) {
        const rIndex = RQueue.shift() || -1;
        const dIndex = DQueue.shift() || -1;
       
        if (rIndex < dIndex) RQueue.push(rIndex + n);
        else DQueue.push(dIndex + n);
    }

    return RQueue.length ? 'Radiant' : 'Dire';
};
