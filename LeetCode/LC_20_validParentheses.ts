const parenthesesMap: Record<string, string> = {
  ')': '(',
  '}': '{',
  ']': '[',
};

// Stack, Easy
// Time: O(n)
// Space: O(n)
function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
      continue;
    }

    if (!stack.length) return false;

    const stackTop = stack.pop()!;

    if (stackTop !== parenthesesMap[char]) return false;
  }

  return !stack.length;
};
