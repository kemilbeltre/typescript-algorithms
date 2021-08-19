const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')

export const isPangram = (phrase: string): boolean => {
  const phraseInLowerCase = phrase.toLocaleLowerCase()

  return alphabets.every(x => phraseInLowerCase.includes(x))
}
