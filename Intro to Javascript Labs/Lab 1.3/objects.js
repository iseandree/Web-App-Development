"use strict";
let basicCar = {
  make: "Honda",
  model: "Civic",
  price: 19_000,
  year: 2019
};

let expensiveCar = {
  make: "Porsche",
  model: "911",
  price: 101_000,
  year: 2021
};

let dog = {
  name: 'Teddy',
  breed: "Beagle"
};

const myName = "ISean'Dre'";
let student = {
  name: myName,
  grade:"A",
  favoriteClass: "JavaScript",
  car: expensiveCar,
  savings: 5_000,
  dog: dog
};

console.log(`${student.name}'s favorite class is ${student.favoriteClass}`);

console.log(basicCar);
console.log(expensiveCar);

let isLessExpensive = basicCar.price < expensiveCar.price;
let isNewer = expensiveCar.year > basicCar.year;
let priceDifference = expensiveCar.price - basicCar.price;
let yearDifference = expensiveCar.year - basicCar.year;

console.log(`Is the basic car less expensive than the expensive car? ${isLessExpensive}`);
console.log(`Is the expensive car newer than the basic car? ${isNewer}`);
console.log(`The difference between the cars is ${priceDifference}`);
console.log(`The age difference between the cars is ${yearDifference} years`);

console.log(`The student owns a car. It is a ${student.car.make} ${student.car.model}`);

let carPayment = 500;
student.savings = student.savings - carPayment;
console.log(`The student makes a ${carPayment} car payment, and now the student's saving is ${student.savings}`);
console.log(`The student has a dog named ${student.dog.name}. The dog is a ${student.dog.breed}`);
console.log(`The student takes their dog ${student.dog.name} for a ride in the ${student.car.make}`);