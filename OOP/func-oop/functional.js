// Functional Programming

const getInfo = ({ type, numOfLegs, age }) => {
  console.log(type, numOfLegs, age);
};

const createAnimal = (type, numOfLegs, age) => {
  const newAnimal = { type, numOfLegs, age };

  return newAnimal;
};

const dog = createAnimal("dog", 4, 3);

console.log(dog);
getInfo(dog);
