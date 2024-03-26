// SOLUTION
//
// Let's implement Memento design pattern:

class Memento {
  #text = "";

  constructor(text) {
    this.#text = text;
  }

  get text() {
    return this.#text;
  }
}

class TextEditor {
  #text = "";

  type(newText) {
    const oldText = this.#text;
    this.#text += newText;

    return new Memento(oldText);
  }

  undo(memento) {
    this.#text = memento.text;
  }

  get text() {
    return this.#text;
  }
}

class Caretaker {
  constructor() {
    this.history = [];
  }

  addMemento(memento) {
    this.history.push(memento);
  }

  getMemento(index) {
    return this.history[index];
  }
}

const editor = new TextEditor();
const caretaker = new Caretaker();

caretaker.addMemento(editor.type("Hello, "));
caretaker.addMemento(editor.type("world!"));

console.log(editor.text); // "Hello, world!"

editor.undo(caretaker.getMemento(1));
console.log(editor.text); // "Hello, "

editor.undo(caretaker.getMemento(0));
console.log(editor.text); // ""

// That way we can keep track of the changes, specify to which exact state we want to revert the changes to and get rid of tightly coupled code.
