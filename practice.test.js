const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require("./practice");

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

test("caesarCipher is a function that takes a string and a shift factor and returns it with each character shifted", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");

  expect(caesarCipher("Khoor, Zruog!", -3)).toBe("Hello, World!");
});

test("analyzeArray is a function that takes an array of numbers and returns an object with the average, min, max, and length", () => {
  const numbers = [1, 2, 3, 4, 5];
  const result = analyzeArray(numbers);
  expect(result).toEqual({
    average: 3,
    min: 1, 
    max: 5, 
    length: 5
  });
});