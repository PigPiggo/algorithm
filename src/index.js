import { knapSack } from './js/algorithms/dynamic-programing/knapsack'
const values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 5,
  n = values.length;

console.log(knapSack(capacity, weights, values, n));