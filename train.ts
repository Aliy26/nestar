// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

function reduceNestedArray(arr: any[]): number {
  const newArr = arr.flat(Infinity);
  console.log(newArr);
  return newArr.reduce((startNum: number, value: number) => {
    return startNum + value;
  }, 0);
}

console.log(reduceNestedArray([1, [1, 2, [4]]]));

const num: any = 2;
let num1: any = 0;
num1 + num;
