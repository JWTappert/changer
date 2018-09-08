const makeChange = require("./index");

test("amount is $2.75, tendered is $5, result should be $2.25", () => {
	expect(makeChange(2.75, 5)).toBe(2.25);
});
