// DRY

class Animal {
  constructor(type, numOfLegs, age) {
    this.type = type;
    this.numOfLegs = numOfLegs;
    this.age = age;
  }
  getInfo() {
    // good oppurtunity for destructuring to make code drier
    return `This is a ${this.age}year old ${this.type} with ${this.numOfLegs}`;
  }
}

const giraffe = new Animal("giraffe", 4, 5);
giraffe.getInfo();

/* This method involves encapsulation 
 * bundling data and methods that perform operations on the data 
 in a package

 ex: You have to go through the barista to get your coffee

*/
