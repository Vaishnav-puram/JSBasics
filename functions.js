function sum(a,b){
    return a+b;
}

console.log(sum(10,20));

const x=function (a,b){
    return a+b;
};
console.log(x(10,20));

let y;
(function (){
     y="hello vaishnav";
})();

console.log(y);

function myFunction(a, b) {
    return a * b;
  }
  
let res = myFunction(4, 3) * 2;
console.log(res);

console.log(typeof(sum));

console.log(sum.toString());

const z=(x,y)=>{return x*y};
console.log(z(10,20));

const ans=(x,y)=>x*y;
console.log(ans(10,20));

const a=()=>console.log("hello vaishnav");
a();

const g=function (x,y){
    if(y==undefined){
        y=20;
    }
    return x*y;
}
console.log(g(10));

function def(x,y=20){
    return x*y;
}
console.log(def(10));

function restFun(...args){
    let sum=0;
    for(ele of args){
        sum+=ele;
    }
    return sum;
}
console.log(restFun(10));
console.log(restFun(10,20));
console.log(restFun(10,20,30));


function findMax(){
    let max=-Infinity;
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max;
}
console.log(findMax(12,3,1,333,12343,5455,64677,1,343,7899));

function addition(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(addition(10,20,30));



function modify(num){
    console.log("Inside function");
    console.log("Before modification : "+num);
    num**=2;
    console.log("After modification : "+num);
}
var n=2;
console.log("Outside function");
console.log("Before modification : "+n);
modify(n);
console.log("After modification : "+n);


function modifyArr(arr){
    console.log("Inside function");
    console.log("Before modification : "+arr);
    arr[0]="bugatti";
    console.log("After modification : "+arr);
}
var arr=["benz","bmw","audi"];
console.log("Outside function");
console.log("Before modification : "+arr);
modifyArr(arr);
console.log("After modification : "+arr);


let fun=myFun();
function myFun(){
    return this;
}
console.log(fun);

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
let stmt=myObject.fullName(); 
console.log(stmt) 

function funcst(p1,p2){
    this.firstName=p1;
    this.lastName=p2;
}
const myObj=new funcst("John","Doe");
console.log(myObj.firstName+" "+myObj.lastName);


const person={
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}
const person1={
    firstName:"vaishnav",
    lastName: "puram"
}
const person2={
    firstName:"ajay",
    lastName:"devgn"
}
console.log(person.fullName.call(person1));
console.log(person.fullName.apply(person2));
console.log(person.fullName);

const stud={
    details:function(city,state){
        return this.firstName+" "+this.lastName+" "+city+" "+state;
    }
}
const s1={
    firstName:"vaishnav",
    lastName:"puram",
}
console.log(stud.details.apply(s1,["HYD","TEL"]));



const teacher={
    firstName:"arora",
    lastName:"rohit",
    fullName : function(){
        return this.firstName+" "+this.lastName;
    }
}
const student={
    firstName:"vaishnav",
    lastName:"puram"
}
let fullName=teacher.fullName.bind(student);
console.log(fullName());


let counter = 0;
function add() {
  counter += 1;
}
add();
add();
add();
console.log(counter);

var u=10;
var fun1=function(){
    console.log(u);
    var u=20;
}
fun1();

function restFun1(... args){
    let sum=0;
    for(ele of args){
        sum+=ele;
    }
    return sum;
}
const vals=[10,20,30];
console.log(restFun1(... vals));

const fn=(x,a,...nums)=>{
    console.log(a,nums);
}
fn(5,6,7,8);