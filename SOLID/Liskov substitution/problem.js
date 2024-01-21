// SUMMARY:
//
// Liskov substitution principle states that objects of the base class should be able to be replaced with objects of a subclass
// without affecting the correctness of the program.

// PROBLEM:
//
// Let's say we want to create some bird subclasses that extend base Bird class:

class Bird {
  fly() {
    console.log("This bird flies.");
  }
}

class Duck extends Bird {
  fly() {
    console.log("The duck flies.");
  }
}
class Pidgeon extends Bird {
  fly() {
    console.log("The pidgeon flies.");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const pidgeon = new Pidgeon();

makeBirdFly(duck); // The duck flies.
makeBirdFly(pidgeon); // The pidgeon flies.

// So far so good. Our main program can invoke makeBirdFly function that will behave differently for different instances of Bird subclasses.
// ...but what if we'd like to add a Penguin? It's still a bird, but it cannot fly.

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins cannot fly :(");
  }
}
const penguin = new Penguin();
makeBirdFly(penguin); // error!
