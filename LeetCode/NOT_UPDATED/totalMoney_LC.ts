function totalMoney(n: number): number {
    let total = 0
    let value = 1

    for (let i = 0; i < n; i++) {
        total += value
        value++

        if (i > 0 && ((i + 1) % 7 == 0)) {
            value = Math.floor((i + 1) / 7) + 1
        }
    }

    return total
};
