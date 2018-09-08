const changer = require("./index");

test("correctly convert change amount to pennies for easy calculations", () => {
	expect(changer.toPennies(2.75)).toBe(275);
	expect(changer.toPennies(100.72)).toBe(10072);
	expect(changer.toPennies(0.68)).toBe(68);
});

test("handles decimal values as input", () => {
	expect(changer.calculateDifference(0.1, 0.25)).toBe(0.15);
});

test("calculate difference between amount tendered and amount due", () => {
	expect(changer.calculateDifference(2.75, 5)).toBe(2.25);
});

test("returns correct amount of pennies", () => {
	expect(changer.makeChange(0.1, 0.25)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
	expect(changer.makeChange(5.77, 20)).toEqual([3, 0, 2, 0, 4, 0, 1, 0, 0, 0]);
});

test("returns human readable coins", () => {
	changer.coins = [1, 0, 0, 0, 0, 0, 0, 2, 0, 0];
	expect(changer.convertToString()).toBe("2 twenties, 1 penny");
	changer.coins = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	expect(changer.convertToString()).toBe(
		"1 hundred, 1 fifty, 1 twenty, 1 ten, 1 five, 1 one, 1 quarter, 1 dime, 1 nickel, 1 penny"
	);
	changer.coins = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
	expect(changer.convertToString()).toBe(
		"2 hundreds, 2 fifties, 2 twenties, 2 tens, 2 fives, 2 ones, 2 quarters, 2 dimes, 2 nickels, 2 pennies"
	);
});

test("converts values to proper string", () => {
	expect(changer.appendValue(1, "penny")).toBe("1 penny");
	expect(changer.appendValue(2, "penny")).toBe("2 pennies");
	expect(changer.appendValue(1, "nickel")).toBe("1 nickel");
	expect(changer.appendValue(2, "nickel")).toBe("2 nickels");
	expect(changer.appendValue(1, "dime")).toBe("1 dime");
	expect(changer.appendValue(2, "dime")).toBe("2 dimes");
	expect(changer.appendValue(1, "quarter")).toBe("1 quarter");
	expect(changer.appendValue(2, "quarter")).toBe("2 quarters");
	expect(changer.appendValue(1, "one")).toBe("1 one");
	expect(changer.appendValue(2, "one")).toBe("2 ones");
	expect(changer.appendValue(1, "five")).toBe("1 five");
	expect(changer.appendValue(2, "five")).toBe("2 fives");
	expect(changer.appendValue(1, "ten")).toBe("1 ten");
	expect(changer.appendValue(2, "ten")).toBe("2 tens");
	expect(changer.appendValue(1, "twenty")).toBe("1 twenty");
	expect(changer.appendValue(2, "twenty")).toBe("2 twenties");
	expect(changer.appendValue(1, "fifty")).toBe("1 fifty");
	expect(changer.appendValue(2, "fifty")).toBe("2 fifties");
	expect(changer.appendValue(1, "hundred")).toBe("1 hundred");
	expect(changer.appendValue(2, "hundred")).toBe("2 hundreds");
	expect(changer.appendValue(-1, "penny")).toBe("");
	expect(changer.appendValue(1, "")).toBe("");
});
