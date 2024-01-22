// SUMMARY:
//
// Inheritance allows one object to inherit properties and methods from another object.

// PROBLEM:
//
// Let's say we need to create two classes that will describe a dog and a cat.

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  woof = () => {
    console.log("Woof!");
  };
}

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  meow = () => {
    console.log("Meow!");
  };
}
// We can see that both Cat and Dog have name and breed properties. We have a duplicated code.

const dog = new Dog("Lisa", "Labrador");
const cat = new Cat("Johnny", "European shorthair");

dog.woof(); // Woof!
cat.meow(); // Meow!
