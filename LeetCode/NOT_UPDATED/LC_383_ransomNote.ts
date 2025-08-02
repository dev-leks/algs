function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) {
        return false
    }

    const magazineCharsMap = new Map()

    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i]
        magazineCharsMap.set(
            char,
            magazineCharsMap.has(char) ? magazineCharsMap.get(char) + 1 : 1
        )
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i]

        if (!magazineCharsMap.get(char)) {
            return false
        }

        magazineCharsMap.set(char, magazineCharsMap.get(char) - 1)
    }

    return true
};
