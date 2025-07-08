const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

// Two pointers, Easy
// Time: O(n)
// Space: O(n)
function reverseVowels(s: string): string {
    const strArr = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (!VOWELS.has(strArr[left])) left++;
        else if (!VOWELS.has(strArr[right])) right--;
        else {
            strArr[left] = s[right];
            strArr[right] = s[left];
            left++;
            right--;
        }
    }

    return strArr.join('');
};



// Old solution
function reverseVowelsOld(s: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    // O(n)
    // const vowelsIndexes = []
    // let vowelsList = []

    // for (let i = 0; i < s.length; i++) {
    //     if (vowels.includes(s[i])) {
    //         vowelsIndexes.push(i)
    //         vowelsList.push(s[i])
    //     }
    // }

    // let result = ''
    // vowelsList = vowelsList.reverse()

    // let vowelIndex = 0
    // for (let i = 0; i < s.length; i++) {
    //     if (vowelsIndexes.includes(i)) {
    //         result += vowelsList[vowelIndex]
    //         vowelIndex++
    //     } else {
    //         result += s[i]
    //     }
    // }

    // return result


    let leftP = 0
    let rightP = s.length - 1
    let res = s.split('')

    // O(n)
    while (leftP < rightP) {
        if (vowels.includes(s[leftP]) && vowels.includes(s[rightP])) {
            res[leftP] = s[rightP]
            res[rightP] = s[leftP]
            leftP++
            rightP--
        }

        if (!vowels.includes(s[leftP])) {
            leftP++
        }

        if (!vowels.includes(s[rightP])) {
            rightP--
        }
    }

    return res.join('')
};
