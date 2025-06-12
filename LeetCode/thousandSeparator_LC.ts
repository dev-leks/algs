function thousandSeparator(n: number): string {
    if (n < 1000) return n.toString();

    let res = ""
    const stringN = n.toString()
    let charCount = 0

    for (let i = stringN.length -1; i >= 0; i--) {
        res = stringN[i] + res
        charCount++

        if (charCount === 3 && stringN[i - 1]) {
            res = "." + res
            charCount = 0
        }
    }

    return res
};
