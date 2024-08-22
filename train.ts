// ZM-TASK:

// Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
// MASALAN: reverseInteger(123456789) return 987654321

// @MITASK

const reverseInteger = (num: number): number => Number(String(num).split("").reverse().join(""));

console.log(reverseInteger(123456789));
