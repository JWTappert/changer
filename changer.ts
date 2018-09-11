export class Changer {
	private denoms = [
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
	];

	coins: number[];

	constructor() {
		this.clearCoins();
	}

	makeChange(amount: number, tendered: number): number[] {
		if (amount < 0 || tendered < 0) return [0];
		this.clearCoins();
		let change = this.calculateDifference(amount, tendered);
		let totalPennies = this.toPennies(change);
		return this.calculateCoins(totalPennies);
	}

	convertToString(coins: number[]): string {
		let result = [];
		for (let i = 9; i >= 0; i--) {
			if (coins[i] > 0) {
				result.push(this.appendValue(coins[i], this.denoms[i][0]));
			}
		}
		return result.join(", ");
	}

	private calculateCoins(pennies: number): number[] {
		for (let i = 9; i >= 0; i--) {
			if (this.remainingPenniesCanBeSplit(i, pennies)) {
				while (this.remainingPenniesCanBeSplit(i, pennies)) {
					pennies = this.calculateDifference(this.denoms[i][1], pennies);
					this.coins[i]++;
				}
			}
		}
		return this.coins;
	}

	private appendValue(value, type): string {
		if (value > 1) {
			type = this.pluralize(type);
		}
		return value > 0 && type != "" ? `${value} ${type}` : "";
	}

	private calculateDifference(amount, tendered): number {
		if (amount < 0 || tendered < 0) return 0;
		return tendered - amount;
	}

	private toPennies(amount): number {
		return amount > 0 ? amount * 100 : 0;
	}

	private remainingPenniesCanBeSplit(i, pennies): boolean {
		return this.calculateDifference(this.denoms[i][1], pennies) >= 0;
	}

	private clearCoins(): void {
		this.coins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}

	private pluralize(type): void {
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
}
