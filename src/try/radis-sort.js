import { Compare, defaultCompare, swap } from './util';

export default function radisSort() {
  if (!Array.isArray(this))
    return this;
  if (this.length < 2) return this;
  const res = [...this]
  const max = Math.max(...res)
  let significantDigit = 1;
  while (max / significantDigit % 10 > 0) {
    countSort(res, significantDigit)
    significantDigit *= 10;
  }
}

function countSort(res, significantDigit) {
  const count = new Array(res.length);
  res.map(v => v / significantDigit % 10 > 0).forEach((v, i) => {
    if (!count[i])
      count[i] = 0;
    count[i]++;
  });
  let aux = [];

}
