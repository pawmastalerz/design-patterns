// SUMMARY:
//
// Interface segregation principle states that a class should not be forced to implement the interfaces it does not use.

// PROBLEM:
//
// While interfaces are not a part of JavaScript language, let's consider a scenario where we want to create a Programmer class that can code, play and sleep:

class Programmer /* implements ICodeable, IPlayable, ISleepable */ {
  constructor(name) {
    this.name = name;
  }
  code() {
    console.log(`The programmer ${this.name} works`);
  }
  play() {
    console.log(`The programmer ${this.name} plays`);
  }
  sleep() {
    console.log(`The programmer ${this.name} sleeps`);
  }
}

const programmer = new Programmer("Pawel");

class WorkPlace {
  static deliverCode(programmer) {
    return programmer.code();
  }
}

WorkPlace.deliverCode(programmer); // The programmer Pawel works
// The deliverCode method only cares about the programmer delivering code.
// It doesn't care what the programmer does after hours - the Programmer class breaks interface segregation principle.
