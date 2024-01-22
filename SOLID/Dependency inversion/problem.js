// SUMMARY:
//
// Dependency inversion principle states that high level modules should not directly depend on low level modules.
// Instead, they should be dependent on abstraction.
// Eg. main app logic should not be dependent on specific tools or libraries.

// PROBLEM:
//
// Let's imagine that we're building an app where some users can sign in:

class Authorizer {
  authenticate(username, password) {
    console.log(
      `${username} authenticated against our own database with password: ${password}`
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
  login(user) {
    const authorizer = new Authorizer();
    return authorizer.authenticate(user.username, user.password);
  }
}

const pawel = new User("Pawel", "1234", "111-111-111");
const userManager = new UserManager();
userManager.login(pawel); // Pawel authenticated against our own database with password: 1234

// All good... Okay, now what if we want to switch a sign in method using phone?
// Now we need to either update the UserManager class to use another authorizer or replace the Authorizers authenticate method.
