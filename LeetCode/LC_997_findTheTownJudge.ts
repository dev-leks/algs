// One array, Easy
// Time: O(m)
// Space: O(n)
function findJudge(n: number, trust: number[][]): number {
  if (trust.length < n - 1) return -1;

  const trustScores = Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trustScores[a]--;
    trustScores[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trustScores[i] === n - 1) {
      return i;
    }
  }

  return -1;
};

// Two arrays, Easy
// Time: O(m)
// Space: O(n)
function findJudge2(n: number, trust: number[][]): number {
  if (!trust.length && n === 1) return 1;

  const trusts = Array(n + 1).fill(0);
  const trusted = Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trusts[a]++;
    trusted[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trusted[i] === n - 1 && trusts[i] === 0) {
      return i;
    }
  }

  return -1;
};


// Hash table, Set, Easy (My first solution)
// Time: O(n + m)
// Space: O(n + m)
function findJudge1(n: number, trust: number[][]): number {
  if (!trust.length && n === 1) return 1;

  const trustsSet = new Set<number>();
  const trustedByMap = new Map<number, Set<number>>();

  for (const [person1, person2] of trust) {
    trustsSet.add(person1);

    const trustedBy = trustedByMap.get(person2) ?? new Set();
    trustedBy.add(person1);
    trustedByMap.set(person2, trustedBy);
  }

  if (trustsSet.size === n) return -1;

  for (let i = 1; i <= n; i++) {
    // if trusts anyone, skip
    if (trustsSet.has(i)) continue;

    const trustedBy = trustedByMap.get(i);

    // if not trusted by anyone, skip
    if (!trustedBy) continue;

    if (trustedBy.size === n - 1 && !trustedBy.has(i)) return i;
  }

  return -1;
};
