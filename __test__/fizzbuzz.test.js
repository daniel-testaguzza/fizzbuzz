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

  test("Should return 2", () => {
    // Arrange
    const underTest = new FizzBuzz();

    // Act
    const actual = underTest.parse(2);

    // Assert
    expect(actual).toBe(2);
  });
  test("Should return Fizz", () => {
    // Arrange
    const underTest = new FizzBuzz();

    // Act
    const actual = underTest.parse(3);

    // Assert
    expect(actual).toBe("Fizz");
  });
  test("Should return Buzz", () => {
    // Arrange
    const underTest = new FizzBuzz();

    // Act
    const actual = underTest.parse(5);

    // Assert
    expect(actual).toBe("Buzz");
  });
  test("Should return Fizz", () => {
    // Arrange
    const underTest = new FizzBuzz();

    // Act
    const actual = underTest.parse(6);

    // Assert
    expect(actual).toBe("Fizz");
  });
  test("Should return Buzz", () => {
    // Arrange
    const underTest = new FizzBuzz();

    // Act
    const actual = underTest.parse(10);

    // Assert
    expect(actual).toBe("Buzz");
  });
});
