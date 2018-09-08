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

// test("returns human readable coins", () => {
// 	expect(changer.convertToString(9.99, 50)).toBe("2 Twenties, 1 penny");
// });
