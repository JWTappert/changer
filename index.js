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
		this.clearCoins();
		let change = this.calculateDifference(amount, tendered);
		let totalPennies = this.toPennies(change);
		return this.calculateCoins(totalPennies);
	},

	calculateCoins(pennies) {
		for (let i = 9; i >= 0; i--) {
			if (this.remainingPenniesCanBeSplit(i, pennies)) {
				while (this.remainingPenniesCanBeSplit(i, pennies)) {
					pennies = this.calculateDifference(this.denoms[i][1], pennies);
					this.coins[i]++;
				}
			}
		}
		return this.coins;
	},

	convertToString() {
		this.coins.forEach(count => {
			console.log(count);
		});
	},

	calculateDifference(amount, tendered) {
		return tendered - amount;
	},

	toPennies(amount) {
		return amount * 100;
	},

	remainingPenniesCanBeSplit(i, pennies) {
		return this.calculateDifference(this.denoms[i][1], pennies) >= 0;
	},

	clearCoins() {
		this.coins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
};
module.exports = changer;
