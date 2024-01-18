// SOLUTION that's even better and JS-specific:

class Address {
  constructor(city, street, streetNumber) {
    this.city = city;
    this.street = street;
    this.streetNumber = streetNumber;
  }
}

// We can set all the optional fields in an object:
class User {
  constructor(firstName, lastName, { phone, address } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
  }
}

const user1 = new User("Bobby", "McBobface");
console.log(user1); // User { firstName: 'Bobby', lastName: 'McBobface', phone: undefined, address: undefined }

const user2 = new User("Ben", "Dover", {
  address: new Address("Warsaw", "Warszawska", "21/37"),
});
console.log(user2); // User { firstName: 'Ben', lastName: 'Dover', phone: undefined, address: Address { city: 'Warsaw', street: 'Warszawska', streetNumber: '21/37' } }
