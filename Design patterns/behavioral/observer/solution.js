// SOLUTION
//
// Let's make the FlightControl follow the Observer design pattern:

class FlightControl {
  weather = "OK";

  constructor() {
    this.planes = [];
  }

  registerPlane(plane) {
    this.planes.push(plane);
  }

  notifyPlanesAboutWeather() {
    this.planes.forEach((plane) => plane.updateWeatherStatus(this.weather));
  }

  displayPlaneStatuses() {
    this.planes.forEach((plane) => {
      console.log(`${plane.name} is ${plane.status}`);
    });
  }
}

class Plane {
  status = "standing still";
  weather = "unknown";

  constructor(name) {
    this.name = name;
  }

  updateWeatherStatus(weatherStatus) {
    console.log(
      `${this.name}: received weather status change: ${weatherStatus}`
    );
    this.weather = weatherStatus;
  }

  fly() {
    if ((this.weather = "OK")) {
      this.setStatus("flying");
    }
  }

  setStatus(status) {
    this.status = status;
    console.log(`${this.name} is now ${this.status}`);
  }
}

const flightControl = new FlightControl();
const plane1 = new Plane("Plane 1");
const plane2 = new Plane("Plane 2");

flightControl.registerPlane(plane1);
flightControl.registerPlane(plane2);

flightControl.notifyPlanesAboutWeather("OK");
// Plane 1: received weather status change: OK
// Plane 2: received weather status change: OK

plane1.fly();
// Plane 1 is now flying
plane2.fly();
// Plane 2 is now flying

flightControl.displayPlaneStatuses();
// Plane 1 is flying
// Plane 2 is flying

// This way, the plane object is notified whenever the weather changes while maintaining code decoupling.
// Additionally, the flight control can still keep track of all the planes and its statuses.
