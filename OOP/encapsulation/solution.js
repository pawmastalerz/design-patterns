// SOLUTION:
//
// Let's make the balance field private:

class BankAccount {
  #owner;
  #balance;

  constructor(owner, balance) {
    this.#owner = owner;
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.#balance) {
      throw new Error("Invalid amount or insufficient funds.");
    }

    this.#balance -= amount;
    console.log(
      `Current balance: ${this.#balance} after withdrawing ${amount}`
    );
  }
}

const newAccount = new BankAccount("Ben Dover", 100);
newAccount.withdraw(10); // Current balance: 90 after withdrawing 10

newAccount.balance = 2000; // Although this will still be a valid JavaScript syntax, it won't change the internal #balance property
console.log(newAccount.balance); // 90
