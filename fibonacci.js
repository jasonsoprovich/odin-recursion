function fibs(n) {
  let array = [0, 1];
  if (n <= 0 || !Number.isInteger(n)) return [];
  if (n === 1) return [0];
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array;
}

console.log(fibs(-1), 'Recursion - negative');
console.log(fibs(0), 'Recursion - zero-length');
console.log(fibs(1.1), 'Recursion - non-integer');
console.log(fibs(1), 'Iteration');
console.log(fibs(2), 'Iteration');
console.log(fibs(5), 'Iteration');
console.log(fibs(8), 'Iteration');

function fibsRec(n) {
  if (n <= 0 || !Number.isInteger(n)) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  // console.log('This was printed recursively');
  const array = fibsRec(n - 1);
  return [...array, array[array.length -1] + array[array.length - 2]];
}

console.log(fibsRec(-1), 'Recursion - negative');
console.log(fibsRec(0), 'Recursion - zero-length');
console.log(fibsRec(1.1), 'Recursion - non-integer');
console.log(fibsRec(1), 'Recursion');
console.log(fibsRec(2), 'Recursion');
console.log(fibsRec(5), 'Recursion');
console.log(fibsRec(8), 'Recursion');
