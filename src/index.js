// import countingSort from './try/countingSort';
import { radixSort } from './js/index'

// Array.prototype.countingSort = countingSort
const arr = [456, 789, 123, 1, 32, 4, 243, 321, 42, 90, 10, 999];
console.log(radixSort(arr));