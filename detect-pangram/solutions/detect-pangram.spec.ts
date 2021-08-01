import { isPangram} from './detect-pangram'

describe('Detect Pangram', () => {
  test('Should return a false if the phrase is not a Pangram', () => {
    const given = 'string'

    const actual = isPangram(given);

    expect(actual).toEqual(false);
  })
  test('Should return a false if the phrase is not a Pangram', () => {
    const given = 'The quick brown fox jumps over the lazy dog'

    const actual = isPangram(given);

    expect(actual).toEqual(true);
  })
})
