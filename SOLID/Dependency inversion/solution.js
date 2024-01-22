// SOLUTION:
//
// Let's rewrite the authorizer class to be abstract:

class Authorizer {
  authenticate() {
    throw new Error("This method should be overridden");
  }
}

class OwnAuthorizer extends Authorizer {
  authenticate(user) {
    console.log(
      `${user.username} authenticated against our own database with password: ${user.password}`
    );
  }
}

class User {
  constructor(username, password, phoneNumber) {
    this.username = username;
    this.password = password;
    this.phoneNumber = phoneNumber;
  }
}

class UserManager {
  constructor(authorizer) {
    this.authorizer = authorizer;
  }
  login(user) {
    return this.authorizer.authenticate(user);
  }
}

const pawel = new User("Pawel", "1234", "111-111-111");
const userManager = new UserManager(new OwnAuthorizer());
userManager.login(pawel); // Pawel authenticated against our own database with password: 1234
// This way, if we want to switch to different authentication method, we simply create a new Authorizer:

class PhoneAuthorizer extends Authorizer {
  authenticate(user) {
    console.log(
      `${user.username} authenticated with phone number: ${user.phoneNumber}`
    );
  }
}
// ...and create a new UserManager with different Authorizer.
// The way we invoke the login method and Authorizers authenticate method stays the same.
// UserManager class does not depend on low level class, now it depends on abstraction.

phoneUserManager = new UserManager(new PhoneAuthorizer());
phoneUserManager.login(pawel); // Pawel authenticated with phone number: 111-111-111
