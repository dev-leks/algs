// Queue, Easy
// Time: amortized O(1), worst-case O(n)
// Space: O(n)
class RecentCounter {
    private requests: number[];
    
    constructor() {
        this.requests = [];
    }

    ping(t: number): number {
        this.requests.push(t);
     
        const rangeStart = t - 3000;
      
        return this.getRequestsCount(rangeStart);
    }

    private getRequestsCount(rangeStart: number): number {
        while (this.requests[0] < rangeStart) {
            this.requests.shift();
        }
        
        return this.requests.length;
    }
}
