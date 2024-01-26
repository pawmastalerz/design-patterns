// SOLUTION:
//
// Let's start with defining global theme types and creating classes for concrete buttons and inputs in that styles:

const THEME_LIGHT = "light";
const THEME_DARK = "dark";

// Let's skip extending the base Button and Input class to simplify the concept:
class LightButton {
  render() {
    console.log(`Rendering button in ${THEME_LIGHT} theme`);
  }
}
class LightInput {
  render() {
    console.log(`Rendering input in ${THEME_LIGHT} theme`);
    console.log(
      `Doing some additional logic related strictly to ${THEME_LIGHT} theme`
    );
  }
}

class DarkButton {
  render() {
    console.log(`Rendering button in ${THEME_DARK} theme`);
  }
}
class DarkInput {
  render() {
    console.log(`Rendering input in ${THEME_DARK} theme`);
  }
}

// Now, let's define an abstract base class (abstract factory) for light and dark themed factories:
class UIFactory {
  createButton() {
    throw new Error("This method must be overridden");
  }
  createInput() {
    throw new Error("This method must be overridden");
  }
}

// It's time to extend the abstract base class and create two factories:
class LightUIFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }
  createInput() {
    return new LightInput();
  }
}
class DarkUIFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }
  createInput() {
    return new DarkInput();
  }
}

// Now, let's define a function that will render the UI depending on the provided factory
function renderUI(factory) {
  const button = factory.createButton();
  const input = factory.createInput();

  button.render();
  input.render();
}

// Finally, we're ready to easily render the UI:
renderUI(new LightUIFactory());
// "Rendering button in light theme"
// "Rendering input in light theme"
// "Doing some additional logic related strictly to light theme"

// Rendering the UI in dark mode is easy:
renderUI(new DarkUIFactory());
// "Rendering button in dark theme"
// "Rendering input in dark theme"
