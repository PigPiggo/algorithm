function minCoinChange(coinArr, amount) {
  let arrCopy = [...coinArr];
  let cache = [];
  const split = (amount, arr) => {
    let arrCopy = [...arr];
    let res = [];
    let newRes;
    while (arrCopy.length && amount > 0) {
      const num = arrCopy.pop();
      cache.push(num)
      amount -= num;
      newRes = num;
      if (amount > 0) {
        const _r = split(amount, arrCopy);
        if (Array.isArray(_r)) {
          newRes = _r
        } else {
          arrCopy.push(newRes)
        }
      }
      if (amount === 0)
        newRes = [num];
    }
    if (Array.isArray(newRes))
      return res.concat(newRes);
    return newRes;
  };
  return split(amount, arrCopy)
}
debugger
minCoinChange([1, 5, 10, 25], 36)

