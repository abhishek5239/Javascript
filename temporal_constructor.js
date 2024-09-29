// Parent constructor function
function Animal() {
    this.species = "Animal";
   
}

// Add a method to Animal's prototype
Animal.prototype.describe = function() {
    return `I am a ${this.species}`;
};
Animal.prototype.game="khan"

// Temporary constructor function
function TempConstructor() {}

// Set up inheritance
TempConstructor.prototype = Animal.prototype; // Inherit Animal's prototype

// Child constructor function
function Dog(name) {
    this.name = name;
    this.species = "Dog"; // Override species
}

// Set Dog's prototype to a new instance of TempConstructor
Dog.prototype = new TempConstructor();
console.log("#",Dog.prototype.constructor); //? just info
Dog.prototype.constructor = Dog; // Correct the constructor property

// Add a method specific to Dog
Dog.prototype.bark = function() {
    return `Woof! My name is ${this.name}`;
};

// Create an instance of Dog
const myDog = new Dog("Buddy");

console.log(myDog.describe()); // Outputs: "I am a Dog" (overrides Animal's describe method)
console.log(myDog.bark());    // Outputs: "Woof! My name is Buddy"

console.log(Dog.prototype);
console.log(TempConstructor.prototype);
console.log(Animal.prototype);

console.log(Dog.game);