// SOLUTION:
//
// Let's create a Pet class that will be a base class for Dog and Cat:

class Pet {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  sleep = () => {
    console.log(`${this.name} is sleeping`);
  };
}

class Dog extends Pet {
  constructor(name, breed) {
    super(name, breed);
  }
  woof = () => {
    console.log("Woof!");
  };
}

class Cat extends Pet {
  constructor(name, breed) {
    super(name, breed);
  }
  meow = () => {
    console.log("Meow!");
  };
}

// Now, we have a base class that holds all the logic related to a pet inside it.

const dog = new Dog("Lisa", "Labrador");
const cat = new Cat("Johnny", "European shorthair");

dog.woof(); // Woof!
dog.sleep(); // Lisa is sleeping
cat.meow(); // Meow!
cat.sleep(); // Johnny is sleeping
