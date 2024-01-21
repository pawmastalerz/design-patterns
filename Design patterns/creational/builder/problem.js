// SUMMARY:
//
// Builder lets us create a complex objects with simple creation steps.
// It separates the creation process of an instance from their representation.

// PROBLEM:
//
// Let's say we want to create users in our app:

class Address {
  constructor(city, street, streetNumber) {
    this.city = city;
    this.street = street;
    this.streetNumber = streetNumber;
  }
}

class User {
  constructor(firstName, lastName, phoneNumber, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}

// To create a User with just a firstName and lastName we have no issues:
const user1 = new User("Bobby", "McBobface");
console.log(user1); // User { firstName: 'Bobby', lastName: 'McBobface', phoneNumber: undefined, address: undefined  }

// The problem arises when we want to create a new user with an adress, but no phone number:
const user2 = new User(
  "Ben",
  "Dover",
  undefined,
  new Address("Warsaw", "Warszawska", "21/37")
);
console.log(user2); // User { firstName: 'Ben', lastName: 'Dover', phoneNumber: undefined, address: Address { city: 'Warsaw', street: 'Warszawska', streetNumber: '21/37'} }

// ...we had to specify the user's phoneNumber as undefined. What if the User class grows and so its constructor?
// const user3 = new User(
//   "Ben",
//   "Dover",
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   new Address("Warsaw", "Warszawska", "21/37")
// );
