function checkIfPangram(sentence: string): boolean {
    const charSet = new Set()

    for (let i = 0; i < sentence.length; i++) {
        charSet.add(sentence[i])

        if (charSet.size == 26) {
            return true
        }
    }

    return false
};
