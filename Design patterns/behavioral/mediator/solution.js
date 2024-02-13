// SOLUTION
//
// Let's create a middleman - the mediator:

class GroundControl {
  requestToLand(plane) {
    return plane.checkPermission();
  }
}

class Plane {
  constructor(airTrafficControl) {
    this.airTrafficControl = airTrafficControl;
  }

  requestToLand() {
    this.airTrafficControl.requestToLand(this);
  }

  checkPermission() {
    return Math.random() < 0.5;
  }
}

// That way, a groundControl object can decide whether the specific plane can land or not:

const groundControl = new GroundControl();
const plane1 = new Plane(groundControl);
const plane2 = new Plane(groundControl);

plane1.requestToLand();
plane2.requestToLand();
