const {capitalize, reverseString, calculator} = require("./practice");

test("capitalize should capitalize the first letter of a word", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("reverseString should reverse a string", () => {
  expect(reverseString("hi")).toBe("ih");
});

test("add function adds two numbers correctly", () => {
  expect(calculator.add(5, 3)).toBe(8);
})

test("subtract function subtracts two numbers correctly", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
})

test("multiply function multiplies two numbers correctly", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
})

test("divide function divides two numbers correctly", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("divide function throws error when dividing by zero", () => {
  expect(() => calculator.divide(10, 0)).toThrowError("Division by zero");
});