
function knapSack(capacity, weights, values, n) {
  const kS = [];
  for (let i = 0; i < n; i++) {
    kS[i] = [];
    for (let w = 0; w <= capacity; w++) {
      if (!kS[i - 1]) {
        if (values[i] > w) {
          kS[i][w] = 0;
        } else {
          kS[i][w] = values[i];
        }
      } else {
        /* 
          由于之前的这个组合方式下，在不超过当前重量的情况下，已经有之前的最大价值
          所以需要在加上当前物品的组合下，一共比较4种情况
          1. 在之前最大价值的重量下，加上当前的重量，如果不超重，则
        */
        let weight = weights[i] + weights[i - 1];
        if (weight <= w) {
          kS[i][w] = kS[i - 1][w] + values[i];
          continue;
        }
        if (weights[i] > w) {
          kS[i][w] = kS[i - 1][w];
          continue;
        }
        kS[i][w] = kS[i - 1][w] > values[i] ? kS[i - 1][w] : values[i]
      }
    }
  };
  return kS
}
const values = [4, 3, 5],
  weights = [2, 3, 4],
  capacity = 5,
  n = values.length;

console.log(knapSack(capacity, weights, values, n));