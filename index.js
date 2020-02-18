var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.push(name);
  return kittens;
}
appendKitten('Broome');

function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift(name);
  return kittens;
}
prependKitten('Arnold');

function removeLastKitten() {
  
}
