function makeFancyString(s: string): string {
    let res = ''
    let charCount = 1

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (i > 0 && char == s[i - 1]) {
          charCount++

          if (charCount >= 3) {
            continue
          }
        } else {
            charCount = 1
        }

        res += char
    }

    return res
};
