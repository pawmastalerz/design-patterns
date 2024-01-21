// SUMMARY:
//
// Single responsibility principle states that a class should have only one reason to change.
// A class should have only one job or responsibility.

// PROBLEM:
//
// Let's say we want to create users in our app:

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // We need two functions that will authenticate the user...
  authenticate(input) {
    return this.password === input;
  }

  // ... and save the user to the database.
  save() {
    console.log("Saving user to the database.");
  }
}

const user1 = new User("Bobby", "password");
if (user1.authenticate("password")) {
  user1.save();
}

// This approach makes the User class have more than one reason to change.
// It's now not responsible for User-specific tasks, but for authentication and handling a database operation.
// Both of those need to be abstracted.
