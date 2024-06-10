const capitalize = require("./practice");

test("capitalizes the first letter of a word", () => {
  expect(capitalize("hi")).toBe("Hi");
});
