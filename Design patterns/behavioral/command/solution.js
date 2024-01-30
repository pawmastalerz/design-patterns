// SOLUTION
//
// Let's introduce a Command design pattern:

// An abstract base class for all our operations:
class Command {
  constructor(operand) {
    this.operand = operand;
  }

  execute() {
    throw new Error("This method must be overridden");
  }
  undo() {
    throw new Error("This method must be overridden");
  }
}

// Concrete command classes that extend base class:
class AddCommand extends Command {
  constructor(operand) {
    super(operand);
  }

  // We make sure that the command can execute and undo itself:
  execute(currentValue) {
    console.log(
      `${currentValue} + ${this.operand} = ${(currentValue += this.operand)}`
    );
    return currentValue;
  }
  undo(currentValue) {
    console.log(
      `${currentValue} - ${this.operand} = ${(currentValue -= this.operand)}`
    );
    return currentValue;
  }
}

class SubtractCommand extends Command {
  constructor(operand) {
    super(operand);
  }

  execute(currentValue) {
    console.log(
      `${currentValue} - ${this.operand} = ${(currentValue -= this.operand)}`
    );
    return currentValue;
  }
  undo(currentValue) {
    console.log(
      `${currentValue} + ${this.operand} = ${(currentValue += this.operand)}`
    );
    return currentValue;
  }
}

class MultiplyCommand extends Command {
  constructor(operand) {
    super(operand);
  }

  execute(currentValue) {
    console.log(
      `${currentValue} * ${this.operand} = ${(currentValue *= this.operand)}`
    );
    return currentValue;
  }
  undo(currentValue) {
    console.log(
      `${currentValue} / ${this.operand} = ${(currentValue /= this.operand)}`
    );
    return currentValue;
  }
}

class DivideCommand extends Command {
  constructor(operand) {
    super(operand);
  }

  execute(currentValue) {
    if (this.operand === 0) throw new Error("Can't divide by zero");
    console.log(
      `${currentValue} / ${this.operand} = ${(currentValue /= this.operand)}`
    );
    return currentValue;
  }
  undo(currentValue) {
    console.log(
      `${currentValue} * ${this.operand} = ${(currentValue *= this.operand)}`
    );
    return currentValue;
  }
}

// Now, we create a Calculator class that can execute concrete commands and undo them on demand:
class Calculator {
  constructor() {
    this.currentValue = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.currentValue = command.execute(this.currentValue);
    this.history.push(command);
  }
  undo() {
    const command = this.history.pop();
    this.currentValue = command.undo(this.currentValue);
  }
}

const calculator = new Calculator();

// This way, we preserve the original functionality:
calculator.executeCommand(new AddCommand(5)); // 0 + 5 = 5
calculator.executeCommand(new SubtractCommand(3)); // 5 - 3 = 2
calculator.executeCommand(new MultiplyCommand(2)); // 2 * 2 = 4
calculator.executeCommand(new DivideCommand(4)); // 4 / 4 = 1

// ...but we can also undo the commands in history:
calculator.undo(); // 1 * 4 = 4
calculator.undo(); // 4 / 2 = 2
calculator.undo(); // 2 + 3 = 5
calculator.undo(); // 5 - 5 = 0
