const {capitalize, reverseString} = require("./practice");

test("capitalize should capitalize the first letter of a word", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("reverseString should reverse a string", () => {
  expect(reverseString("hi")).toBe("ih");
});