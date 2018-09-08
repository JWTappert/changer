const changer = require("./index");

test("amount is $2.75, tendered is $5, result should be $2.25", () => {
	expect(changer.makeChange(2.75, 5)).toBe(2.25);
});

test("correctly convert change amount to pennies for easy calculations", () => {
	expect(changer.toPennies(2.75)).toBe(275);
	expect(changer.toPennies(100.72)).toBe(10072);
});

test("calculate difference between amount tendered and amount due", () => {
	expect(changer.calculateDifference(2.75, 5)).toBe(2.25);
});

test("returns correct amount of pennies", () => {
	expect(changer.makeChange(0.1, 0.25)).toBe([0, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
});
