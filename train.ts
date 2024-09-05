// ZR-TASK:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function countNumbersAndLetters(str: string): { string: number } {
	const result = { number: 0, string: 0 };
	for (let value of str) {
		if (Number(value) >= 0) result.number++;
		else if (alphabet.includes(value)) result.string++;
	}
	return result;
}

console.log(countNumbersAndLetters("string152%/&"));
