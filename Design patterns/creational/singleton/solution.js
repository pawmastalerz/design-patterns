// SOLUTION:
//
// Let's make sure that every time the Config constructor is called, it returns the same instance:

class Config {
  apiURL = String.raw`http://example.com`;
  timesCalled = 0;

  constructor() {
    if (Config.instance) {
      return Config.instance;
    }
    Config.instance = this;
  }

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
console.log(s2.config.getTimesCalled()); // 2

// Every time we created a new service instance, we used the same instance of Config class.
