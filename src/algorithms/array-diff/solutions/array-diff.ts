export function arrayDiff(a: number[], b: number[]): number[] {
  let newArray = []

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) == -1) {
      newArray.push(a[i])
    }
  }

  for (let j = 0; j < b.length; j++) {
    if (a.indexOf(b[j]) == -1) {
      newArray.push(b[j])
    }
  }

  return newArray
}
