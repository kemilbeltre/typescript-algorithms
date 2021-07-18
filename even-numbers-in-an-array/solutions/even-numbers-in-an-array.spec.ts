import { evenNumbers} from './even-numbers-in-an-array'

describe('Even Numbers', () => {
    test('Should return the even number of an array', () => {
        const givenOne = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const secondGivenOne = 3;

        const actualOne = evenNumbers(givenOne, secondGivenOne);

        expect(actualOne).toEqual([4, 6, 8]);
    })
})
