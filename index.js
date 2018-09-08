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
		let result = [];
		for (let i = 9; i >= 0; i--) {
			if (this.coins[i] > 0) {
				result.push(this.appendValue(this.coins[i], this.denoms[i][0]));
			}
		}
		return result.join(", ");
	},

	appendValue(value, type) {
		if (value > 1) {
			type = this.pluralize(type);
		}
		return value > 0 && type != "" ? `${value} ${type}` : "";
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
	},

	pluralize(type) {
		switch (type) {
			case "penny":
				type = "pennies";
				break;
			case "nickel":
				type = "nickels";
				break;
			case "dime":
				type = "dimes";
				break;
			case "quarter":
				type = "quarters";
				break;
			case "one":
				type = "ones";
				break;
			case "five":
				type = "fives";
				break;
			case "ten":
				type = "tens";
				break;
			case "twenty":
				type = "twenties";
				break;
			case "fifty":
				type = "fifties";
				break;
			case "hundred":
				type = "hundreds";
				break;
			default:
				break;
		}
		return type;
	}
};
module.exports = changer;
