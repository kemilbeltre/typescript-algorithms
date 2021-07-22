export function descendingOrder(numbers: number) {
  if (Math.sign(numbers) === 1) {
     let arrNumbers = numbers.toString().split('').sort (
       (a:any, b:any) => b - a ).join('');
     return parseInt(arrNumbers);
  }
  else if (numbers === 0){
    return  0
  }
  return 'negative';
}
