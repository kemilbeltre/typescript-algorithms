const vowel = /A|E|I|O|U|a|e|i|o|u/g;

export const disemvowel = (str: string) => str.replace(vowel, '')
