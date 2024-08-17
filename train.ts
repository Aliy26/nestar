// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

function printNumbers(): void {
	let count: number = 1;
	setInterval(() => {
		console.log(count++);
		count === 6 ? process.exit() : count;
	}, 1000);
}

printNumbers();
