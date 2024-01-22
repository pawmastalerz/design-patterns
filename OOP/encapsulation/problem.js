// SUMMARY:
//
// Encapsulation - no external object can alter the internal state of other objects.
// Only methods internal to that object are allowed to change its state.

// PROBLEM:
//
// Consider a scenario where we want to model a bank account and make withdrawals:

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      throw new Error("Invalid amount or insufficient funds.");
    }

    this.balance -= amount;
    console.log(`Current balance: ${this.balance} after withdrawing ${amount}`);
  }
}

const newAccount = new BankAccount("Ben Dover", 100);
newAccount.withdraw(10); // Current balance: 90 after withdrawing 10
// This approach lets us manipulate the balance property directly:
newAccount.balance = 2000;
console.log(newAccount.balance); // 2000
