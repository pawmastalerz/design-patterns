// SOLUTION:
//
// Let's decouple the code:

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

class UserAuthenticator {
  static authenticate(input, user) {
    return user.password === input;
  }
}

class UserDataManager {
  static save(user) {
    console.log(`Saving user ${user.username} to the database.`);
  }
}
// ... so we have a class that will handle authentication and a seperate class that will handle database connection.

// Now we have a clear decoupling between those two abstractions:
const user1 = new User("Bobby", "password");
if (UserAuthenticator.authenticate("password", user1)) {
  UserDataManager.save(user1);
}
