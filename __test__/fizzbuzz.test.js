const FizzBuzz = require("../src/fizzbuzz");

describe("fizzbuzz", () => {
  test("Should return 1", () => {
    // Arrange
    const underTest = new FizzBuzz();
    // Act
    const actual = underTest.parse(1);
    // Assert
    expect(actual).toBe(1);
  });
});
