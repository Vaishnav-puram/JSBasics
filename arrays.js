const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value+" ";
}
console.log(txt);

for(var e in numbers){
    console.log(numbers[e]);
}