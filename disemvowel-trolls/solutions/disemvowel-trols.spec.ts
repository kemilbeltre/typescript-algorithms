import { disemvowel } from './disemvowel-trolls'

describe('disemvowel', () => {
  it('should return "hll" ', async () => {
    const given = 'hello'

    const actual = disemvowel(given)

    expect(actual).toBe('hll')
  })

  it('should return "Ths wbst s fr lsrs LL!" ', async () => {
    const given = 'This website is for losers LOL!'

    const actual = disemvowel(given)

    expect(actual).toBe('Ths wbst s fr lsrs LL!')
  })
})
