// Array, Prefix and suffix, Medium (A bit better then below one)
// Time: O(n)
// Space: O(1) (output array is not counted)
function productExceptSelf(nums: number[]): number[] {
  if (!nums.length) return [];

  const n = nums.length;
  const answer: number[] = [1];

  for (let i = 1; i < n; i++) {
    answer.push(answer[i - 1] * nums[i - 1]);
  }

  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= postfix;
    postfix *= nums[i];
  }

  return answer;
};

// Array, Prefix and suffix, Medium (Optimized - from video)
// Time: O(n)
// Space: O(1) (output array is not counted)
function productExceptSelf3(nums: number[]): number[] {
    const answer: number[] = [];

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= postfix;
        postfix *= nums[i];
    }

    return answer;
};

// Array, Prefix and suffix, Medium (My first solution)
// Time: O(n)
// Space: O(n)
function productExceptSelf2(nums: number[]): number[] {
    const n = nums.length;
    const prefixes: number[] = [1];
    const postixes: number[] = [];
    postixes[n - 1] = 1;
   
    for (let i = 1; i < n; i++) {
        prefixes[i] = prefixes[i - 1] * nums[i - 1];
        postixes[n - i - 1] = postixes[n - i] * nums[n - i];
    }

    return nums.map((_, index) => prefixes[index] * postixes[index]);
};

// Array, Prefix and suffix, Medium (Same as above, but from video)
// Time: O(n)
// Space: O(n)
function productExceptSelf1(nums: number[]): number[] {
    const n = nums.length;
    const prefixes: number[] = [];
    const postfixes: number[] = [];
   
    for (let i = 0; i < n; i++) {
        prefixes[i] = i > 0 ? prefixes[i - 1] * nums[i] : nums[i];
        postfixes[n - 1 - i] = i > 0 ? postfixes[n - i] * nums[n - 1 - i] : nums[n - 1 - i];
    }

    return nums.map((_, index) => {
        const prefix = index > 0 ? prefixes[index - 1] : 1;
        const postfix = index < n - 1 ? postfixes[index + 1] : 1;
        
        return prefix * postfix;
    });
};
