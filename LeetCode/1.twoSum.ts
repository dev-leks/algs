function twoSum2loops(nums: number[], target: number): number[] {
  let sumIndexes: number[] = []

  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        let sum = nums[i] + nums[j]

        if (sum === target) {
            sumIndexes = [i, j]
        }
      }
  }

  return sumIndexes
};

function twoSum1loop(nums: number[], target: number): number[] {
  let numbersMap = {}
  
  for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i]

      if (diff in numbersMap) return [numbersMap[diff], i]

      numbersMap[nums[i]] = i
  }

  return [0,0]
};
