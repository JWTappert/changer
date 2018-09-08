function makeChange(amount, tendered) {
	let change = tendered - amount;
	return change;
}
module.exports = makeChange;
