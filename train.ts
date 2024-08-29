// ZP-TASK:

// shunday function yozing, u 2 ta array parametr qabul qilsin. Siz bu ikki arrayning qiymatlari o'xshash bo'lishini (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// MASALAN:
// areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
// areArraysEqual([1, 2, 3], [4, 1, 2]) // false

function areArraysEqual(arr: number[], arr2: number[]) {
	let count = 0;
	for (let value of arr) {
		if (!arr2.includes(value)) count++;
	}
	for (let value of arr2) {
		if (!arr.includes(value)) count++;
	}
	return count >= 1 ? false : true;
}

console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true
console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1])); //true
console.log(areArraysEqual([1, 2, 3], [4, 1, 2])); //false
