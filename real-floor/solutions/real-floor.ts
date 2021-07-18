
export function realFloor(Number: number) {
    const isPositive = Math.sign(Number)

    if (Number < 13 || isPositive == -1) {
        if (isPositive == -1) {
            return Number;
        }
        else if (isPositive == 1 && Number !== 0) {
            return Number - 1
        }
        return 0
    }
    return 13;
}

//TODO: REFACTOR
