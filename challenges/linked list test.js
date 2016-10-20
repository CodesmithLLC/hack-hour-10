var bird = {name:'DoDo'};
var cat = {name:'felix'};
var dog = {name:'Scooby Doo'};
var duck = {name:'Howard'};
var animals = {
    head : bird
};
bird.next = cat;
cat.next = dog;
dog.next = duck;

console.log(animals);

var curr = "animals.head";
while (next) {
  console.log(animals);
  curr += ".next";
}