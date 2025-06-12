function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]) {
    let expMissing = 0
    let energyMissing = 0

    let tempEnergy = initialEnergy
    let tempExp = initialExperience

    for (let i = 0; i < energy.length; i++) {
        if (tempEnergy <= energy[i]) {
            let energyLeft = energy[i] - tempEnergy + 1
            energyMissing += energyLeft
            tempEnergy += energyLeft
        }

        tempEnergy -= energy[i]

        if (tempExp <= experience[i]) {
            let expLeft = experience[i] - tempExp + 1
            expMissing += expLeft
            tempExp += expLeft
        }

        tempExp += experience[i]
    }

    return expMissing + energyMissing
};

console.log(minNumberOfHours(5, 3, [1,4], [2,5]))
