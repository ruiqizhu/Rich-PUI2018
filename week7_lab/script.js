function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.type = "cat";
  this.image = "cat.jpg";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.type = "dog";
  this.image = "dog.jpg";
}

function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.type = "panda";
  this.image = "panda.jpg";
}


var animals = [new Cat(), new Dog(), new Panda()];
var names = ["Fluffy", "Apple", "Woofie", "Yuanyuan", "Garfield"];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    var index = generateRandomIndex(5);
    var name = names[index];
    return name;
}

function generateRandomAge() {
    return Math.floor(Math.random() * 20);
}

function generateRandomAnimal() {
    animal = animals[generateRandomIndex(3)];
    name = generateRandomName();
    age = generateRandomAge();
    if (animal instanceof Cat)
    {
      return new Cat(name, age);
    }
    else if (animal instanceof Dog)
    {
      return new Dog(name, age);
    }
    else if (animal instanceof Panda)
    {
      return new Panda(name, age);
    }
}

$(document).ready(function() {
  var animal = generateRandomAnimal();
  // update animal properties
  $("#animal-info").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});
