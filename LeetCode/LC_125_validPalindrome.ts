// Two pointers, Easy
// Time: O(n)
// Space: O(1)
function isPalindrome(s: string): boolean {
  let leftP = 0;
  let rightP = s.length - 1;

  while (leftP < rightP) {
    while (leftP < rightP && !isAlphNum(s[leftP])) {
      leftP++;
    }

    while (leftP < rightP && !isAlphNum(s[rightP])) {
      rightP--;
    }

    if (s[leftP].toLowerCase() !== s[rightP].toLowerCase()) return false;

    leftP++;
    rightP--;
  }

  return true;
};

function isAlphNum(char: string) {
  return (
    (char >= 'a' && char <= 'z') ||
    (char >= 'A' && char <= 'Z') ||
    (char >= '0' && char <= '9')
  );
};

// Two pointers, Easy (Old solution)
// Time: O(n)
// Space: O(1)
function isPalindrome1(s: string): boolean {
    const ls = s.toLowerCase();

    let leftP = 0;
    let rightP = ls.length - 1;
    
    while (leftP <= rightP) {
        if (!isAlphOrDigit(ls[leftP])) leftP++;
        else if (!isAlphOrDigit(ls[rightP])) rightP--;
        else {
            if (ls[leftP] !== ls[rightP]) return false;
            leftP++;
            rightP--;
        }
    }

    return true;
};

function isAlphOrDigit(char: string): boolean {
    return (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
};
