function generateString(length) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}

console.log(generateString(10));
