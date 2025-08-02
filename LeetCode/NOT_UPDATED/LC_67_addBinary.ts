function addBinary(a: string, b: string): string {
    let res = ""
    let aP = a.length - 1
    let bP = b.length - 1
    let bitsLeft = 0
  
    while (aP >= 0 || bP >= 0 || bitsLeft) {
        const aNum = aP >= 0 ? Number(a[aP]) : 0
        const bNum = bP >= 0 ? Number(b[bP]) : 0

        const sum = aNum + bNum + bitsLeft
        const digit = sum % 2
        bitsLeft = Math.floor(sum / 2)
        res = digit + res

        aP--
        bP--
    }

    return res
};


// Own solution
function addBinary2(a: string, b: string): string {
    let res = ""
    let aP = a.length - 1
    let bP = b.length - 1
    let isDozenLeft = false
  
    while (aP >= 0 || bP >= 0) {
        const aNum = a[aP]
        const bNum = b[bP]

        if (aNum == "1" && bNum == "1") {
            res = (isDozenLeft ? "1" : "0") + res
            isDozenLeft = true
        } else if (aNum == "1" || bNum == "1") {
            res = (isDozenLeft ? "0" : "1") + res
            isDozenLeft = isDozenLeft
        } else {
            res = (isDozenLeft ? "1" : "0") + res
            isDozenLeft = false
        }

        aP--
        bP--
    }

    if (isDozenLeft) res = "1" + res

    return res
};
