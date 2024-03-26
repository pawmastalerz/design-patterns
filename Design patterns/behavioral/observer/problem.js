// SUMMARY:
//
// The Observer design pattern defines an object (known as the subject), that stores a list of dependents (known as observers), that need to be notified when the state of the subject changes.

// PROBLEM:
//
// Let's say we want to model a flight control class that would:
// - notify the planes about the current weather at the airport
// - keep track of all the planes current statuses.

class FlightControl {
  weather = "OK";

  constructor() {
    this.planes = [];
  }

  registerPlane(plane) {
    this.planes.push(plane);
  }

  handlePlaneStatusChange(plane) {
    console.log(`FlightControl: ${plane.name} is now ${plane.status}`);
  }
}

class Plane {
  status = "standing still";
  constructor(name, flightControl) {
    this.name = name;
    this.flightControl = flightControl;
  }

  fly() {
    if ((this.flightControl.weather = "OK")) {
      this.setStatus("flying");
    }
  }

  setStatus(status) {
    this.status = status;
    this.flightControl.handlePlaneStatusChange(this);
  }
}

const flightControl = new FlightControl();
const plane1 = new Plane("Plane 1", flightControl);
flightControl.registerPlane(plane1);
const plane2 = new Plane("Plane 2", flightControl);
flightControl.registerPlane(plane2);
plane1.fly(); // FlightControl: Plane 1 is now flying
plane2.fly(); // FlightControl: Plane 2 is now flying

// Although this works, each plane interacts directly with the FlightControl system. This adds complexity to the code and leads to tight code coupling.
