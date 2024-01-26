// SOLUTION:
//
// Let's define a clone method inside the User class:

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getUserData() {
    return `User: ${this.firstName} ${this.lastName}`;
  }

  clone() {
    return new User(this.firstName, this.lastName);
  }
}

const user1 = new User("Ben", "Dover");
console.log(user1.getUserData()); // "User: Ben Dover"

// Now, the clone method will return a new, deep copied object:
const user2 = user1.clone();
user2.firstName = "Jana";
console.log(user2.getUserData()); // "User: Jana Dover"
