// ZN-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

function rotateArray(arr: number[], num: number): number[] {
	let vacant: number[] = [];
	let arr1: number[] = arr.splice(num + 1);
	for (let number of arr1) {
		vacant.unshift(number);
	}
	return vacant.concat(arr);
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
