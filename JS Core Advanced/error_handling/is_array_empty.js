function isArrayEmpty(array) {
  if (array.length === 0) {
    throw new Error("Array is empty");
  } else {
    return "Array is not empty";
  }
}

try {
  console.log(isArrayEmpty([1]));
  console.log(isArrayEmpty([]));
} catch (error) {
  console.error(error.message);
}
