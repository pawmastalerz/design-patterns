// SOLUTION:

class Address {
  constructor(city, street, streetNumber) {
    this.city = city;
    this.street = street;
    this.streetNumber = streetNumber;
  }
}

// Here, we have a User class with only 2 required fields - firstName and lastName.
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// We use an instance of this class to actually create (build) the user object.
class UserBuilder {
  constructor(firstName, lastName) {
    this.user = new User(firstName, lastName);
  }

  // Those two methods can be used, but don't have to be.
  setPhoneNumber(phoneNumber) {
    this.user.phoneNumber = phoneNumber;
    return this;
  }
  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const user1 = new UserBuilder("Bobby", "McBobface").build();
console.log(user1); // User { firstName: 'Bobby', lastName: 'McBobface' }

const user2 = new UserBuilder("Ben", "Dover")
  .setAddress(new Address("Warsaw", "Warszawska", "21/37"))
  .build();
//   ...that way we don't have to specify undefined for optional parameters.
console.log(user2); // User { firstName: 'Ben', lastName: 'Dover', address: Address { city: 'Warsaw', street: 'Warszawska', streetNumber: '21/37' } }
