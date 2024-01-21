// SOLUTION:
//
// Let's abstract a Bird and FlyingBird:

class Bird {
  doSomeBirdStuff() {
    console.log("The bird is doing some bird stuff");
  }
}
class FlyingBird extends Bird {
  fly() {
    console.log("This bird flies.");
  }
}

// Now, let's create different classes of flying or non-flying birds:
class Duck extends FlyingBird {
  fly() {
    console.log("The duck flies.");
  }
}
class Pidgeon extends FlyingBird {
  fly() {
    console.log("The pidgeon flies.");
  }
}
class Penguin extends Bird {}

// Let's make sure that the makeBirdFly function accepts a base class of a flying bird:
function makeBirdFly(flyingBird) {
  if (!(flyingBird instanceof FlyingBird)) {
    return console.log("This is a non-flying bird!");
  }
  flyingBird.fly();
}
// ... this way, we're sure that we can substitute the base class of a FlyingBird with an instance of a subclass.

const duck = new Duck();
const pidgeon = new Pidgeon();
const penguin = new Penguin();

makeBirdFly(duck); // The duck flies.
makeBirdFly(pidgeon); // The pidgeon flies.
makeBirdFly(penguin); // This is a non-flying bird!
