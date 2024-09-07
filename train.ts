// ZS-TASK:

// Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4

function singleNumber(arr: number[]): number | number[] {
	let vacant: number[] = [];
	for (let value of arr) {
		if (arr.indexOf(value) === arr.lastIndexOf(value)) vacant.push(value);
	}
	return vacant.length === 1 ? vacant[0] : vacant;
}

console.log(singleNumber([4, 2, 1, 2, 1]));
