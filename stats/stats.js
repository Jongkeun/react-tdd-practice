exports.max = numbers => Math.max(...numbers);
exports.min = numbers => Math.min(...numbers);
exports.avg = numbers => {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum / numbers.length;
};
exports.sort = numbers => numbers.sort((a, b) => a - b);
exports.median = numbers => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);
  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};
