function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((a, b) => a + b, 0)
}

function multiply (array) {
	return array.reduce((a, b) => a * b);
}

function power(a, b) {
	return a ** b;
}

function factorial(n) {
	if (n == 0 || n == 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}