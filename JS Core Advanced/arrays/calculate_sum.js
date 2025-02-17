function calculateSum(array) {
  return array
    .filter((number) => number > 0 && number < 10)
    .reduce((sum, number) => sum + number, 0);
}

console.log(calculateSum([-1, 5, 12, 0, 6, 10, 9, 1]));
