// SUMMARY:
//
// Polymorphism allows objects of different types to be treated as objects of a common type.

// PROBLEM:
//
// Let's create two classes that will represent rectangles and squares:

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    console.log(this.width * this.height);
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    console.log(Math.PI * this.radius ** 2);
  }
}

const rectangle = new Rectangle(2, 3);
const circle = new Circle(5);

rectangle.area(); // 6
circle.area(); // 78.53981633974483

// Although this will work, we can observe that both Rectangle and Circle class do not share a common interface or base class despite having a common area function.
