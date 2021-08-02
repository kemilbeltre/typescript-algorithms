import { compareSame } from './are-they-the-same'

describe('Are they the "same"?', () => {
  it('should return false if a or b are null', async () => {
    const givenA = null
    const givenB = null

    const actual = compareSame(givenA, givenB)

    expect(actual).toEqual(false)
  })

  it('should return false if a or b have different length', async () => {
    const givenA = [121, 144, 19, 161, 19, 144, 19, 11]
    const givenB = [121, 14641, 20736, 361]

    const actual = compareSame(givenA, givenB)

    expect(actual).toEqual(false)
  })

  it('should checks whether the two arrays have the "same" elements, ' +
    'with the same multiplicities.', async () => {

    const givenA = [121, 144, 19, 161, 19, 144, 19, 11]
    const givenB = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

    const actual = compareSame(givenA, givenB)

    expect(actual).toEqual(true)
  })
})

