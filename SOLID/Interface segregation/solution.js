// SOLUTION:
//
// Let's split the "Interfaces":

class ICodeable {
  code() {
    console.log(`The person ${this.name} works`);
  }
}
class IPlayable {
  play() {
    console.log(`The person ${this.name} works`);
  }
}
class ISleepable {
  play() {
    console.log(`The person ${this.name} sleeps`);
  }
}

class Programmer extends ICodeable {
  constructor(name) {
    super();
    this.name = name;
  }
  code() {
    console.log(`The programmer ${this.name} works`);
  }
}

const programmer = new Programmer("Pawel");

class WorkPlace {
  static deliverCode(programmer) {
    return programmer.code();
  }
}

WorkPlace.deliverCode(programmer); // The programmer Pawel works
// Now the deliverCode method is invoked on an object that can code.
