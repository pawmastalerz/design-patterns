// SUMMARY:
//
// Open-closed principle states that software entities (classes, modules, functions etc.) should be open for extension but closed for modification.
// The behavior of an entity can be extended without modifying its code.

// PROBLEM:
//
// Let's say we want to create a static AreaCalculator class:

class ShapeCalculator {
  static calculateArea(shape) {
    if (shape.type === "circle") {
      return Math.PI * shape.radius ** 2;
    } else if (shape.type === "square") {
      return shape.side ** 2;
    }
  }
}

const circle = { type: "circle", radius: 2 };
const square = { type: "square", side: 3 };

console.log(ShapeCalculator.calculateArea(circle)); // 12.566370614359172
console.log(ShapeCalculator.calculateArea(square)); // 9

// Although this works, and it lets us to extend the ShapeCalculator class by adding new functionality (eg. calculate field) it still breaks the open-closed principle.
// If we want to introduce triangles, we need to modify the ShapeCalculator class and add another if statement.
