const changer = {
	denoms: [
		["penny", 1],
		["nickel", 5],
		["dime", 10],
		["quarter", 25],
		["one", 100],
		["five", 500],
		["ten", 1000],
		["twenty", 2000],
		["fifty", 5000],
		["hundred", 10000]
	],

	coins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

	makeChange(amount, tendered) {
		let change = this.calculateDifference(amount, tendered);
		let totalPennies = this.toPennies(change);
		return this.calculateCoins(totalPennies);
	},

	calculateCoins(pennies) {
		if (pennies == 0) return coins;
		// while (pennies > 0) {
		for (let i = 9; i >= 0; i--) {
			if (pennies - this.denoms[i][1] >= 0) {
				console.log(pennies - this.denoms[i][1]);
				this.coins[i]++;
			}
			// this.calculateCoins(pennies);
		}
		// }
	},

	calculateDifference(amount, tendered) {
		return tendered - amount;
	},

	toPennies(amount) {
		return amount * 100;
	}
};
module.exports = changer;
