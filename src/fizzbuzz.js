class FizzBuzz {
  parse(inputNumber) {
    if (inputNumber % 5 === 0) {
      return "Buzz";
    }
    if (inputNumber % 3 === 0) {
      return "Fizz";
    }
    return inputNumber;
  }
}

module.exports = FizzBuzz;
