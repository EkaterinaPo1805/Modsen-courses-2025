class Person {
    #name: string;

    constructor(name: string) {
        this.#name = name
    }

    getName(): string {
        return `name: ${this.#name}`
    }
}

const person1 = new Person('Ваня');
console.log(person1.getName());
