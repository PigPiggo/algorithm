export default function minCoinChange(coins, amount) {
  const cache = [];

  const makeChange = value => {
    if (!value)
      return [];
    if (cache[value])
      return cache[value];
    let min = [];
    let newMin;
    let newAmount;
    for (let v of coins) {
      newAmount = value - v;
      if (newAmount > 0) {
        newMin = [...makeChange(newAmount)];
      }
      if (newAmount < 0) continue;
      if (newAmount === 0)
        newMin = [];
      newMin.push(v)
      if ((!!newMin.length && newMin.length <= min.length - 1) || !min.length) {
        min = newMin
      }
    }
    return (cache[value] = min)
  }
  return makeChange(amount)
}