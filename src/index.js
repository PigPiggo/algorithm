// import { minCoinChange } from './js/algorithms/dynamic-programing/min-coin-change'
const cache = []
function minCoinChange(coins, amount) {
  const makeChange = value => {
    if (!value)
      return [];
    if (cache[value])
      return cache[value];
    let min = [];
    let newMin;
    let newAmount;
    for (let v of coins) {
      if (value === 2) debugger
      newAmount = value - v;
      if (newAmount > 0) {
        newMin = makeChange(newAmount);
      }
      if (newAmount === 0)
        newMin = [];
      if (newAmount < 0) continue;
      if (!!min.length && newMin.length > min.length - 1) continue;
      newMin.push(v)
      min = newMin
    }
    return (cache[value] = min)
  }


  const aa = makeChange(amount)
  console.log(cache);
  console.log(aa);

  return aa
}

console.log(minCoinChange([1, 2], 4));