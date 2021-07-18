export function evenNumbers(array: number[], number: number) {
    let evenNumbers = [];

    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i])
        }
    }
    return evenNumbers.splice(evenNumbers.length - number, number);
}
