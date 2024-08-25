// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

function areParenthesesBalanced(str: string): boolean {
	let count: number = 0;
	for (let letter of str) {
		if (letter === "(") count++;
		else if (letter === ")") count--;
	}

	return count === 0 ? true : false;
}

console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));
