// SUMMARY:
//
// Abstract Factory lets us create families of related objects without specifying their concrete classes

// PROBLEM:
//
// Let's say we're building a UI of buttons and inputs that can have light or dark theme:

class Button {
  constructor(theme) {
    this.theme = theme;
  }

  render() {
    console.log(`Rendering button in ${this.theme} theme`);
  }
}

class Input {
  constructor(theme) {
    this.theme = theme;
  }

  render() {
    console.log(`Rendering input in ${this.theme} theme`);
  }
}

const theme = "dark";
const button = new Button(theme);
const textField = new Input(theme);

button.render(); // "Rendering button in dark theme"
textField.render(); // "Rendering input in dark theme"

// Although this works, we can easily observe that Button and Input class belong to the same family of related objects.
// As our application grows, changing the behavior (specific implementation) of buttons in diferent theme can become cumbersome.
// We can simplify the code by adding abstraction and implementing abstract factory.
