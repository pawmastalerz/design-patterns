// SOLUTION:
//
// We consider this class to be abstract
class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // An abstract render method
  render = function () {
    throw new Error("render should be overridden");
  };
}

class Triangle extends Shape {
  constructor(x, y) {
    super(x, y);
    // some additional Triangle-creation-specific logic
  }

  // We override the render method so it has some triangle-specific rendering logic
  render = function () {
    console.log(`Rendering triangle with x: ${this.x}, y: ${this.y}`);
  };
}

class Square extends Shape {
  constructor(x, y) {
    super(x, y);
    // some additional Square-creation-specific logic
  }

  render = function () {
    console.log(`Rendering square with x: ${this.x}, y: ${this.y}`);
  };

  // Adding a functionality to a Shape subclass is easy:
  doSomeSquareStuff = function () {
    console.log("Hello, I'm a square, Im squaring");
  };
}

function ShapeFactory() {
  this.create = function (type, x, y) {
    switch (type) {
      case "Triangle":
        return new Triangle(x, y);
      case "Square":
        return new Square(x, y);
      default:
        return;
    }
  };
}

// We instantiate the factory and let it handle triangle/square-specific creation process and functionality
const shapeFactory = new ShapeFactory();

const triangle = shapeFactory.create("Triangle", 1, 2);
const square = shapeFactory.create("Square", 2, 2);

console.log(triangle.render());
console.log(square.render());
console.log(square.doSomeSquareStuff());
