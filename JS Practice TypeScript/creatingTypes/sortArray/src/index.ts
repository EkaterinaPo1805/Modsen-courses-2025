function sortArray<T>(array: T[]): T[] {
    return array.every((elem) => typeof elem === 'number')
    ? array.sort((a, b) => a - b)
    : array.sort();
}

console.log(sortArray([9, 2, 12, -1, 3]))
console.log(sortArray(['9', '2', '12', '-1', '3']))