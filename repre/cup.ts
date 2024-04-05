class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge >= 0) {
      this._age = newAge;
    } else {
      throw new Error('Age cannot be negative.');
    }
  }
}

// Usage
const person = new Person(30);
console.log(person.age); // Outputs: 30
person.age = 25;
console.log(person.age); // Outputs: 25
