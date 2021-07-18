import { realFloor } from './real-floor';

describe('Real Floor', () => {
    it('should return the real floor (American System) with negative numbers', () => {

        const actual = realFloor(-3)
        expect(actual).toBe(-3);

        const actualOne = realFloor(0)
        expect(actualOne).toBe(0);

        const actualTwo = realFloor(5)
        expect(actualTwo).toBe(4);

        const actualThree = realFloor(15)
        expect(actualThree).toBe(13);
    })
})


/*1  =>  0
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3*/
