// SUMMARY:
//
// Abstraction is the process of hiding complex implementation details and showing only the essential features of an object.

// PROBLEM:
//
// Let's say we're developing an app that requires an email to be sent:

class EmailSender {
  connect = () => console.log("connecting");
  authenticate = () => console.log("authenticating");
  send = () => console.log("sending");
  disconnect = () => console.log("disconnecting");
}

const emailSender = new EmailSender();

// To actually send anemail we need to invoke all the methods that will connect to SMTP server, authenticate the user, send the email and disconnect:
emailSender.connect(); // connecting
emailSender.authenticate(); // authenticating
emailSender.send(); // sending
emailSender.disconnect(); // disconnecting

// The main program needs to be agnostic of specific implementation on how the email is actually being sent.
