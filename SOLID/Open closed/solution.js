// SOLUTION:
//
// Let's create different shape classes and an abstract Shape class:

class Shape {
  area() {
    throw new Error("This needs to be overridden");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side ** 2;
  }
}

// Now, let's benefit from polymorphism. Let's create an abstract class that will handle area calculation based on the implementation of that specific class:
class ShapeCalculator {
  static calculateArea(shape) {
    return shape.area();
  }
}

const circle = new Circle(2);
const square = new Square(3);

console.log(ShapeCalculator.calculateArea(circle)); // 12.566370614359172
console.log(ShapeCalculator.calculateArea(square)); // 9

// This way, we can:
// 1) easily extend the ShapeCalculator class by adding another calculateField method
// 2) keep the ShapeCalculator class closed for modification - it's now agnostic of the specific implementation of the calculation details
// 3) easily add another Triangle class and implement calculateArea method there.
