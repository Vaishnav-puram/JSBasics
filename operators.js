console.log(2**3);

let a=3;
console.log((100*3)+a);

let b=4;
b**=2;
console.log(b);

let c=3;
console.log(`check equality ${a===c}`);

let d=17
let eligibleToVote=(d<18)?"not eligible to vote":"eligible to vote";
console.log(eligibleToVote);

console.log("2".length);
console.log("12".length);
console.log("2"<"12"); //false
console.log("2">"12"); //true
console.log("12">"11"); //true

let f=12;
console.log(typeof(f));
console.log(f instanceof(Object));
let g=new Number(12);
console.log(g instanceof(Number));

console.log(5&1);


let myName=null;
let text=myName??"missing";
console.log("Text is "+text);
{
let myName=undefined;
let text=myName??"not defined yet";
console.log("Text is "+text);
}

const person={
    name:{
        firstName:"vaishnav",
        lstName:"puram"
    },
    branch:"CSE",
    hobbies:{
        one:"movies",
        two:"series",
    }
}
console.log(person.name.firstName+" "+person.name.lstName);
console.log(person.hobbies.one+" "+person.hobbies.three);

const person1 = {
    name: 'Alice',
    job: {
      title: 'Engineer',
      company: {
        name: 'TechCo',
      }
    }
  };

console.log(person1.job.company?.exp);