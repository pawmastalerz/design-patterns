// SOLUTION:
//
// Let's abstract the specific implementation of sending an email and expose only a public send method:

class EmailSender {
  // all those methods are private and internal
  #connect = () => console.log("connecting");
  #authenticate = () => console.log("authenticating");
  #disconnect = () => console.log("disconnecting");

  send = () => {
    this.#connect();
    this.#authenticate();
    console.log("sending");
    this.#disconnect();
  };
}

const emailSender = new EmailSender();

// Now, we only invoke a simple send function, not caring about implementation details:
emailSender.send(); // connecting authenticating sending disconnecting
