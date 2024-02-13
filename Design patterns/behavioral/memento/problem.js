// SUMMARY:
//
// Memento allows us to capture and restore the state of an object without exposing its implementation.

// PROBLEM:
//
// Let's say we want to code a text editor, where the user can undo the changes.
// We could create an undo() method directly in the TextEditor class, like this:

class TextEditor {
  #text = "";

  type(newText) {
    this.#text += newText;
  }

  undo() {
    this.#text = this.#text.slice(0, -1);
  }

  get text() {
    return this.#text;
  }
}

const textEditor = new TextEditor();

textEditor.type("Hello, ");
textEditor.type("world!");
console.log(textEditor.text); // "Hello, world!"

textEditor.undo();
console.log(textEditor.text); // "Hello, world"

// Although this works, we can notice that the undo() method directly manipulates the state of the instance of the Editor class.
// This leads to tightly coupled code.
// Additionally, we have no mechanism to capture and restore previous state.
