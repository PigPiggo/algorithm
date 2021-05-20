export default function countingSort() {
  if (!Array.isArray(this))
    return this;
  if (this.length < 2) return this;
  const maxValue = Math.max(...this);
  const counts = new Array(maxValue + 1);
  for (let v of this) {
    if (!counts[v])
      counts[v] = 0;
    counts[v]++;
  }
  let res = [];
  counts.forEach((v, i) => {
    console.log(i);
    if (!counts[i]) return;
    let count = v;
    while (count > 0) {
      res.push(i);
      count--;
    }
  })
  return res;
}