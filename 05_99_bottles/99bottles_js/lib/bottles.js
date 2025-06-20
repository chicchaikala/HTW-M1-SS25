export class Bottles {
  verse(verseNumber) {
    const bottleNumber = BottleNumber.factory(verseNumber);
    const nextBottleNumber = BottleNumber.factory(bottleNumber.successor());

    return `${bottleNumber.capitalize(bottleNumber)} of beer on the wall, ${bottleNumber} of beer.\n` +
            `${bottleNumber.action()}, ${nextBottleNumber} of beer on the wall.\n`;
  }

  verses(maxVerse, minVerse) {
    let verseList = [];

    for (let i = maxVerse; i >= minVerse; i--) {
      verseList.push(this.verse(i));
    }

    return verseList.join('\n');
  }

  song() {
    return this.verses(99, 0);
  }
}

class BottleNumber {
  static factory(number) {
    let bottleNumberClass = BottleNumber;

    if (number === 0)
      bottleNumberClass = BottleNumber0;

    if (number === 1)
      bottleNumberClass = BottleNumber1;

    return new bottleNumberClass(number);
  }

  constructor(number) {
    this.number = number;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  container() {
    return 'bottles';
  }

  pronoun() {
    return 'one';
  }

  quantity() {
    return this.number;
  }

  action() {
    return `Take ${this.pronoun(this.number)} down and pass it around`;
  }

  successor() {
    return this.number - 1;
  }

  capitalize(string) {
    string = string.toString();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

class BottleNumber0 extends BottleNumber {
  action() {
    return 'Go to the store and buy some more';
  }

  quantity() {
    return 'no more';
  }

  successor() {
    return '99';
  }
}

class BottleNumber1 extends BottleNumber {
  container() {
    return 'bottle';
  }

  pronoun() {
    return 'it';
  }
}