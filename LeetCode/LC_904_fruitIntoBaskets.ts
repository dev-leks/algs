// Sliding window, Medium (Improved with ChatGPT, but logic is the same)
// Time: O(n)
// Space: O(1)
function totalFruit(fruits: number[]): number {
    if (fruits.length <= 2) return fruits.length;

    const fruitsMap = new Map<number, number>();
    
    let left = 0;
    let maxCount = 0;

    for (let right = 0; right < fruits.length; right++) {
        const fruit = fruits[right];
        fruitsMap.set(fruit, (fruitsMap.get(fruit) || 0) + 1);

        while (fruitsMap.size > 2) {
            const leftFruit = fruits[left];
            fruitsMap.set(leftFruit, fruitsMap.get(leftFruit)! - 1);
            
            if (!fruitsMap.get(leftFruit)) fruitsMap.delete(leftFruit);
            
            left++;
        }

        maxCount = Math.max(maxCount, right - left + 1);
    }

    return maxCount;
};

// Sliding window, Medium 
// Time: O(n)
// Space: O(1)
function totalFruit1(fruits: number[]): number {
    if (fruits.length <= 2) return fruits.length;

    const fruitsMap = new Map<number, number>();
    
    let left = 0;
    let right = 0;

    while (fruitsMap.has(fruits[right]) || fruitsMap.size < 2) {
        const fruit = fruits[right];
        fruitsMap.set(fruit, (fruitsMap.get(fruit) ?? 0) + 1);
        right++;
    }

    let maxCount = right - left;

    while (right < fruits.length) {
        const fruit = fruits[right];

        if (!fruitsMap.has(fruit)) {
            while (fruitsMap.size === 2) {
                const prevFruit = fruits[left];
                const prevFruitCount = fruitsMap.get(prevFruit);
              
                if (prevFruitCount && prevFruitCount > 1) fruitsMap.set(prevFruit, prevFruitCount - 1);
                else fruitsMap.delete(prevFruit);
               
                left++;
            }
        }
        
        fruitsMap.set(fruit, (fruitsMap.get(fruit) ?? 0) + 1);
        maxCount = Math.max(maxCount, right - left + 1);
        right++;
    }

    return maxCount;
};

