"use strict";

function hasDuplicates(array) {
  let set = new Set(array);
  return array.length !== set.size;
}

console.log(hasDuplicates([3, 2, 5, 3]));
console.log(hasDuplicates([3, 4, 6, 1]));
