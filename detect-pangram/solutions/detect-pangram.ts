const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')

export const isPangram = (phrase: string): boolean => {
  const phraseInLowerCase = phrase.toLocaleLowerCase()
  console.log(alphabets)

  return alphabets.every(x => phraseInLowerCase.includes(x))
}
