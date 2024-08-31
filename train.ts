function findDuplicates(arr: number[]): number[] {
	let vacant: number[] = [];
	let vacant2: number[] = [];
	for (let value of arr) {
		if (!vacant.includes(value)) vacant.push(value);
		else if (!vacant2.includes(value)) vacant2.unshift(value);
	}
	return vacant2;
}
console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));
