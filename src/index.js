import quickSort from './try/quickSort';

Array.prototype.quickSort = quickSort

const arr = [3, 5, 8, 1, 2, 9, 4, 7, 6];
console.log(arr.quickSort());