import { Compare, defaultCompare, swap } from './util';

export default function quickSort() {
  if (!Array.isArray(this)) return this;
  if (this.length < 2) return this;
  const res = [...this];
  quick(0, this.length - 1, res);
  return res;
}

function quick(left, right, arr) {
  let index = partition(left, right, arr);
  if (left < index - 1) {
    quick(left, index - 1, arr);
  }
  if (index < right) {
    quick(index, right, arr);
  }
  return arr
}

function partition(left, right, arr) {
  const pivot = arr[Math.floor((left + right) / 2)];
  if (pivot === 9) debugger
  while (left <= right) {
    while ((arr[left] < pivot)) {
      left++;
    };
    while ((arr[right] > pivot)) {
      right--
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}