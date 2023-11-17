const user={
    name:"vaishnav",
    age:23,
    "branch enrolled":"cse"
}
console.log(user);
console.log(user.name);
console.log(user["branch enrolled"]);
for(key in user){
    console.log(key);
}
console.log("--------------------");
for(key in user){
    console.log(user[key]);
}
delete user["branch enrolled"];
delete user.age;
console.log(user);

var a=10;
delete a;
console.log(a);

const property="firstname";
const name="vaishnav";
const person={
    [property]:name
}
console.log(person);

const exp={
    a:"one",
    b:"two",
    a:"three"
}
console.log(exp);

const nums={
    a:100,
    b:200,
    "title":"my nums"
}
console.log(nums);
multipleByTwo(nums);
function multipleByTwo(nums){
    for(key in nums){
        if(typeof(nums[key])==="number"){
            nums[key]*=2;
        }
    }
}
console.log(nums);

const v={}
const b={
    key:"val1"
}
const c={
    key:"val2"
}
v[b]=1;
v[c]=2;
console.log(v);

const person1={
    name:"vaishnav",
    age:23
}
var str=JSON.stringify(person1);
console.log(str);
const person2=JSON.parse(str);
console.log(person2.age);

console.log([..."vaishnav"]);

const user1={name:"vaishnav",age:23};
const admin={admin:true,...user1};
console.log(user1,admin);

const shape={
    radius:10,
    diameter(){
        return this.radius*2;
    },
    // perimeter:()=>{
    //     return 2*Math.PI*this.radius;
    // }
    perimeter(){
        const nestedArrow=()=>{
            // console.log(this.radius);
            console.log(2*Math.PI*this.radius);
        }
        nestedArrow();
    }
}
console.log(shape.diameter());
shape.perimeter();

const student={
    fname:"vaishnav",
    age:23,
    fullName:{
        first:"vaishnav",
        last:"puram"
    }
}
const { fname:myName }=student;
console.log(myName);
const {fullName:{first}}=student;
console.log(first);
const{fullName:{last}}=student;
console.log(last);


const stud={
    name:"vaishnav",
    age:23
}
const stud1=stud; //shallow copy
stud.age=22;
console.log(stud1);

//const stud2=Object.assign({},stud); //deep copy
//const stud2=JSON.parse(JSON.stringify(stud)); //deep copy
const stud2={...stud}; //deep copy
console.log(stud2);
stud.age=23;
console.log(stud,stud1,stud2);
stud2.name="abhi";
console.log(stud,stud1,stud2);

const student1={
    fname:"vaishnav",
    lname:"puram",
    age:23,
    greet(){
        console.log(`Hello ${this.fname} ${this.lname}`);
    }
}
student1.greet();