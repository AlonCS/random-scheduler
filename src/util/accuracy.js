export default function accuracy(val, total) {
  return ((val / total) * 100).toFixed(2) + "%";
}
