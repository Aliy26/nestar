// ZL-TASK:

import e from "express";

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

function stringToKebab(str: string): string {
	let newStr = str.split(" ");
	let vacant: string[] = [];
	for (let value of newStr) {
		vacant.push(value.toLowerCase());
	}
	return vacant.join("-");
}

console.log(stringToKebab("i love Kebab"));
