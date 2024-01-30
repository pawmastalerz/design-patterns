// SUMMARY:
//
// Command turns a request into an object that contains information about the request.

// PROBLEM:
//
// Let's create a simple Calculator class:

class Calculator {
  constructor() {
    this.currentValue = 0;
  }

  add(operand) {
    console.log(
      `${this.currentValue} + ${operand} = ${(this.currentValue += operand)}`
    );
  }

  subtract(operand) {
    console.log(
      `${this.currentValue} - ${operand} = ${(this.currentValue -= operand)}`
    );
  }

  multiply(operand) {
    console.log(
      `${this.currentValue} * ${operand} = ${(this.currentValue *= operand)}`
    );
  }

  divide(operand) {
    if (operand === 0) throw new Error("Can't divide by zero");
    console.log(
      `${this.currentValue} / ${operand} = ${(this.currentValue /= operand)}`
    );
  }
}

const calculator = new Calculator();

calculator.add(5); // 0 + 5 = 5
calculator.subtract(3); // 5 - 3 = 2
calculator.multiply(2); // 2 * 2 = 4
calculator.divide(4); // 4 / 4 = 1

// Although this is a pretty solid and clear code, we can't really keep track of the operations that we performed and undo some of them.
