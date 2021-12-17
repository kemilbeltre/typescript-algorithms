import { arrayDiff } from './array-diff'

describe('arrayDiff', () => {
  it(
    'should remove all values from list a, which are present in list b ' + 'keeping their order.',
    () => {
      const givenA = [1, 2, 3, 4]
      const givenB = [1, 2, 3, 4, 5]

      const actual = arrayDiff(givenA, givenB)

      expect(actual).toEqual([5])
    }
  )
})
