// SUMMARY:
//
// Factory provides an interface to create an instance of a subclass, while maintaining a possibility to specify the type of that class.

// PROBLEM:
//
// We create a class that has some properties and methods common to triangle and a square:
class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  render = function () {
    console.log(`Rendering shape with x: ${this.x}, y: ${this.y}`);
  };
}

// We instantiate new shapes:
const triangle = new Shape(1, 2);
const square = new Shape(2, 2);

// Adding a functionality to a shape requires us to do it for example like this:
square.doSomeSquareStuff = function () {
  console.log("Hello, I'm a square, Im squaring");
};

// Although this works, we cannot specify a specific creation method nor provide subclass-specific functionality.
console.log(triangle.render());
console.log(square.render());
console.log(square.doSomeSquareStuff());
