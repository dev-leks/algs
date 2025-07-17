// Two pointers, Easy (My first solution)
// Time: O(n)
// Space: O(n)
function reversePrefix(word: string, ch: string): string {
    let chIndex = word.indexOf(ch);

    if (chIndex === -1) return word;

    const wordArr = word.split('');
    let index = 0;
    while (index < chIndex) {
        const temp = wordArr[index];
        wordArr[index] = wordArr[chIndex];
        wordArr[chIndex] = temp;
        index++;
        chIndex--;
    }

    return wordArr.join('');
};

// Two pointers + Stack, Easy
// Time: O(n)
// Space: O(n)
function reversePrefix2(word: string, ch: string): string {
    let chIndex = -1;
    let index = 0;
    const stack: string[] = [];

    while (chIndex === -1 && index < word.length) {
        if (word[index] === ch) chIndex = index;
        stack.push(word[index]);
        index++;
    }

    if (chIndex === -1) return word;

    return stack.reverse().join('') + word.substring(chIndex + 1, word.length)
};

// Two pointers, Easy (From Editorial - improved my first one)
// Time: O(n)
// Space: O(n)
function reversePrefix3(word: string, ch: string): string {
    let chIndex = word.indexOf(ch);

    if (chIndex === -1) return word;

    let result = '';
    for (let i = 0; i < word.length; i++) {
       if (i <= chIndex) result += word[chIndex - i];
       else result += word[i];
    }

    return result;
};
