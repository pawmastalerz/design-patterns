// SOLUTION:
//
// Let's create a new abstract class called Shape:

class Shape {
  area() {
    throw new Error("This method must be overridden");
  }
}

// Now, let's make Rectangle and Circle class extend Shape:
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    console.log(this.width * this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    console.log(Math.PI * this.radius ** 2);
  }
}

const rectangle = new Rectangle(2, 3);
const circle = new Circle(5);

// Now, we can benefit from polymorphism.
// Let's create a function that will accept an array of objects of Shape base type and call area method on every one of them:
const displayAreas = (shapes) => {
  shapes.forEach((shape) => {
    shape.area();
  });
}; // 6, 78.53981633974483

displayAreas([rectangle, circle]);
