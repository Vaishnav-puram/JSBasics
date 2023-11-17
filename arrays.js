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

var arr=["python","java","MySQL"];
var res=arr.map(a=>a.substring(0,3)).reduce((a,b)=>a.concat(b));
console.log(res);