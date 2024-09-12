// ZU-TASK:

// Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
// MASALAN: sumOfUnique([1,2,3,2]) return 4

// @MITASK

function sumOfUnique(arr: number[]): number {
  let count: number = 0;
  for (let value of arr) {
    if (arr.indexOf(value) === arr.lastIndexOf(value)) count += value;
  }
  return count;
}

console.log(sumOfUnique([1, 2, 3, 2]));
