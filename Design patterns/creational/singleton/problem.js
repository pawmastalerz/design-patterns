// SUMMARY:
//
// Singleton makes sure that a class has only one instance, while providing global access to that instance.

// PROBLEM:
//
// Let's define a Config class that we'd like to share across multiple services:

class Config {
  apiURL = String.raw`http://example.com`;
  timesCalled = 0;

  getApiURL() {
    this.timesCalled++;
    return this.apiURL;
  }

  getTimesCalled() {
    return this.timesCalled;
  }
}

class serviceOne {
  constructor(config) {
    this.config = config;
  }
}

class serviceTwo {
  constructor(config) {
    this.config = config;
  }
}

const s1 = new serviceOne(new Config());
const s2 = new serviceTwo(new Config());

s1.config.getApiURL();
console.log(s1.config.getTimesCalled()); // 1

s2.config.getApiURL();
console.log(s2.config.getTimesCalled()); // 1

// Every time we created a new service instance, we also created a new instance of Config class.
