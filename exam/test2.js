n = 9;

for (var i = 0; n - 2 * i > 0; i++) {
	console.log(" ".repeat(i) + "*".repeat(n - 2*i) + " ".repeat(i));
}

for (var i = 0; i < Math.floor(n/2); i++) {
	console.log(" ".repeat(n - Math.floor(n/2 + 2) - i) + "*".repeat(3 + 2*i) + " ".repeat(n - Math.floor(n/2 + 2) - i));
}