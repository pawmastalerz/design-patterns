// SUMMARY:
//
// Prototype lets us copy existing objects without making our code dependent on their classes.
// It's useful when the cost of creating a new instance of an object is more expensive or complex than copying an existing instance.

// PROBLEM:
//
// Let's define a user class and some example method:

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getUserData() {
    return `User: ${this.firstName} ${this.lastName}`;
  }
}

// Creating a new user works as expected
const user1 = new User("Ben", "Dover");
console.log(user1.getUserData()); // "User: Ben Dover"

// Now, let's create a new user for Bens sister. She shares the same last name, address, phone number, so let's use a spread operator and change only his first name:
const user2 = { ...user1, firstName: "Jana" };
console.log(user2.getUserData()); // ERROR!

// Because we used a shallow copy, the methods inside are not inherited.
