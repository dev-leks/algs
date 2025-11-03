// Hash table, Medium (Without sorting, but with third map)
// Time: O(n + k)
// Space: O(k), k - number of unique characters
function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    const frequenciesMap1 = new Map<string, number>();
    const frequenciesMap2 = new Map<string, number>();

    for (const char of word1) {
        frequenciesMap1.set(char, (frequenciesMap1.get(char) ?? 0) + 1);
    }
    for (const char of word2) {
        if (!frequenciesMap1.has(char)) return false;
        frequenciesMap2.set(char, (frequenciesMap2.get(char) ?? 0) + 1);
    }

    if (frequenciesMap1.size !== frequenciesMap2.size) return false;

    const frequenciesCountMap = new Map<number, number>();

    frequenciesMap1.forEach(value => {
        frequenciesCountMap.set(value, (frequenciesCountMap.get(value) ?? 0) + 1)
    });

    frequenciesMap2.forEach(value => {
        const count = frequenciesCountMap.get(value) ?? 0;
        count > 1 ? frequenciesCountMap.set(value, count - 1) : frequenciesCountMap.delete(value);
    });

    return !frequenciesCountMap.size;
};

// Hash table, Medium (My first solution with sorting)
// Time: O(nlog(n))
// Space: O(k), k - number of unique characters
function closeStrings1(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    const frequenciesMap = new Map<string, number>();
    const frequencies2Map = new Map<string, number>();

    for (const char of word1) {
        frequenciesMap.set(char, (frequenciesMap.get(char) ?? 0) + 1);
    }
    for (const char of word2) {
        frequencies2Map.set(char, (frequencies2Map.get(char) ?? 0) + 1);
    }

    if (frequenciesMap.size !== frequencies2Map.size) return false;

    // OR simply: if (![...frequenciesMap.keys()].every(key => frequencies2Map.has(key))) return false;
    const set1 = new Set([...frequenciesMap.keys()]);
    for (const key of frequencies2Map.keys()) {
        if (!set1.has(key)) return false;
    }

    const sorted1 = [...frequenciesMap.values()].sort((a, b) => a - b);
    const sorted2 = [...frequencies2Map.values()].sort((a, b) => a - b);

    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) return false;
    }

    return true;
};

// Hash table, Medium (My first optimized solution with sorting)
// Time: O(nlog(n))
// Space: O(k), k - number of unique characters
function closeStrings1_2(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    const frequenciesMap1 = new Map<string, number>();
    const frequenciesMap2 = new Map<string, number>();

    for (const char of word1) {
        frequenciesMap1.set(char, (frequenciesMap1.get(char) ?? 0) + 1);
    }
    for (const char of word2) {
        if (!frequenciesMap1.has(char)) return false;
        frequenciesMap2.set(char, (frequenciesMap2.get(char) ?? 0) + 1);
    }

    if (frequenciesMap1.size !== frequenciesMap2.size) return false;

    const sortedFrequencies1 = [...frequenciesMap1.values()].sort((a, b) => a - b);
    const sortedFrequencies2 = [...frequenciesMap2.values()].sort((a, b) => a - b);

    for (let i = 0; i < sortedFrequencies1.length; i++) {
        if (sortedFrequencies1[i] !== sortedFrequencies2[i]) return false;
    }

    return true;
};
