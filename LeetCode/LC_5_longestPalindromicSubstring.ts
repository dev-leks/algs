// Two pointers (Expand from center), Medium
// Time: O(n^2)
// Space: O(1)
function longestPalindrome5(s: string): string {
  if (s.length <= 1) return s;

  const n = s.length;
  let start = 0;
  let end = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= 1; j++) {
      let left = i;
      let right = i + j;

      while (s[left] == s[right] && left >= 0 && right < n) {
        left--;
        right++;
      }
      left++;
      right--;

      if (right - left > end - start) {
        start = left;
        end = right;
      }
    }
  }

  return s.substring(start, end + 1);
};

namespace DynamicProgramming {
  // Dynamic programming (Shorter), Medium
  // Time: O(n^2)
  // Space: O(n^2)
  function longestPalindrome4(s: string): string {
    if (s.length <= 1) return s;

    const n = s.length;
    const dp: boolean[][] = Array.from({length: n}, () => Array(n).fill(false));

    let start = 0;
    let end = 0;

    for (let i = n - 2; i >= 0; i--) {
      for (let j = i + 1; j < n; j++) {
        dp[i][j] = s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1]);
        if (dp[i][j] && j - i > end - start) {
          start = i;
          end = j;
        }
      }
    }

    return s.substring(start, end + 1);
  };

  // Dynamic programming, Medium
  // Time: O(n^2)
  // Space: O(n^2)
  function longestPalindrome3(s: string): string {
    if (s.length <= 1) return s;

    const n = s.length;
    const dp: boolean[][] = Array.from({length: n}, () => Array(n).fill(false));
    let start = 0;
    let end = 0;

    for (let i = 0; i < n; i++) {
      dp[i][i] = true;
    }

    for (let i = 0; i < n - 1; i++) {
      if (s[i] === s[i + 1]) {
        dp[i][i + 1] = true;
        start = i;
        end = i + 1;
      }
    }

    for (let length = 2; length < n; length++) {
      for (let i = 0; i < n - length; i++) {
        const j = i + length;
        if (s[i] === s[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true;
          start = i;
          end = j;
        }
      }
    }

    return s.substring(start, end + 1);
  };
}

namespace BruteForce {
  // Brute force, Medium (LC solution)
  // Time: O(n^3)
  // Space: O(1)
  function longestPalindrome2(s: string): string {
    if (s.length <= 1) return s;

    function checkIsPalindrome(start: number, end: number): boolean {
      let left = start;
      let right = end - 1;

      while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
      }

      return true;
    }

    for (let length = s.length; length > 0; length--) {
      for (let start = 0; start <= s.length - length; start++) {
        if (checkIsPalindrome(start, start + length)) {
          return s.substring(start, start + length);
        }
      }
    }

    return '';
  };

  // Brute force, Medium (My solution)
  // Time: O(n^3)
  // Space: O(1)
  function longestPalindrome1(s: string): string {
    if (s.length <= 1) return s;

    const n = s.length;
    let res = '';

    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        const substr = s.substring(i, j + 1);

        if (substr.length <= res.length) continue;

        let left = i;
        let right = j;
        let isPalindrome = true;
        while (isPalindrome && left < right) {
          if (s[left] !== s[right]) isPalindrome = false;
          left++;
          right--;
        }

        if (isPalindrome && substr.length > res.length) {
          res = substr;
        }
      }
    }

    return res;
  };
}
