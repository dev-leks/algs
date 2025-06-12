/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

function solution(isBadVersion: any) {
    return function(n: number): number {
        let start = 1
        let end = n

        while (start < end) {
            let mid = Math.floor((start + end) / 2)

            if (isBadVersion(mid)) {
                end = mid
            } else {
                start = mid + 1
            }
        }

        return start
    };
};
