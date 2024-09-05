// ZR-TASK:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

function countNumbersAndLetters(str: string): { string: number } {
	const result = { number: 0, string: 0 };
	for (let value of str) {
		if (Number(value) >= 0) result.number++;
		else if (value >= "a") result.string++;
	}
	return result;
}

console.log(countNumbersAndLetters("string152%/&"));
