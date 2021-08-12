import { sumOfTwoAngles } from './sum-of-two-angles'

describe('Sum of angles', () => {
  it('should return "N will be greater than 2" ', () => {
    const actual = sumOfTwoAngles(2)

    expect(actual).toBe('N will be greater than 2.')
  })

  it('should return the sum of angles ', () => {
    const actual = sumOfTwoAngles(3)

    expect(actual).toBe(180)
  })

  it('should return the sum of angles ', () => {
    const actual = sumOfTwoAngles(4)

    expect(actual).toBe(360)
  })
})
