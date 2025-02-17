class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  description() {
    return `Book: ${this.name}\n Author: ${this.author}\n Year: ${this.year}`;
  }
}

class Ebook extends Book {
  constructor(name, author, year, price) {
    super(name, author, year);
    this.price = price;
  }

  description() {
    return `Book: ${this.name}\n Author: ${this.author}\n Year: ${this.year}\n Price: ${this.price}BYN`;
  }
}

const littlePrince = new Ebook("The Little Prince", "Antoine de Saint-Exupéry", 1943, 25);
console.log(littlePrince.description());
