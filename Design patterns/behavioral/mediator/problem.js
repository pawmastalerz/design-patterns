// SUMMARY:
//
// Mediator defines an object that encapsulates how a set of other objects interact with each other.
// It disallows direct communication between objects and forces them to collaborate via a middleman - mediator.

// PROBLEM:
//
// Let's imagine we're writing software for an airport, that needs to organize the way the queue of landing airplanes.
// Of course we won't delegate the task to the Plane object and make the planes themselves figure that out:

class Plane {
  requestToLand(otherPlane) {
    return otherPlane.checkPermission();
  }

  checkPermission() {
    return Math.random() < 0.5;
  }
}

const plane1 = new Plane();
const plane2 = new Plane();

plane1.requestToLand(plane2);

// We need a mediator.
