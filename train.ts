// ZT-TASK:

// Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
// MASALAN: firstUniqueCharIndex(“stamp”) return 0

// @MITASK

function firstUniqueCharIndex(str: string): number | null {
	for (let value of str) {
		if (str.indexOf(value) === str.lastIndexOf(value)) return str.indexOf(value);
	}
	return null;
}

console.log(firstUniqueCharIndex("ssttaammpp"));
console.log(firstUniqueCharIndex("sstamp"));
console.log(firstUniqueCharIndex("stamp"));
