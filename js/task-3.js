class StringBuilder {
  #value; // Оголошення приватної властивості

  constructor(initialValue) {
    this.#value = initialValue; // Ініціалізація приватної властивості
  }

  getValue() {
    return this.#value; // Повернення значення приватної властивості
  }

  padEnd(str) {
    this.#value += str; // Додавання рядка до кінця
  }

  padStart(str) {
    this.#value = str + this.#value; // Додавання рядка на початок
  }

  padBoth(str) {
    this.#value = str + this.#value + str; // Додавання рядка на початок і кінець
  }
}

// Код для перевірки
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
