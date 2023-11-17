this.a=5;
console.log(this.a);
console.log(this);

var x=10;
function b(){
    var y=200;
    console.log(y);
}
console.log(window.x);
window.b();

function getParam(){
    console.log(this); //window object
    console.log(this.a);
}
this.getParam();

let student={
    firstName:"vaishnav",
    lastName:"puram",
    fullName: function(){
        console.log(this.firstName+" "+this.lastName);
        console.log(this); //student object
    }
}
student.fullName();

let person={
    firstName:"vaishnav",
    lastName:"puram",
    fullName: function(){
        console.log(this.firstName+" "+this.lastName);
        console.log(this); //person object
    },
    address:{
        city:"HYD",
        getAdd:function(){
            console.log(this); //address object
            console.log(this.city);
        }
    }
}
person.fullName();
person.address.getAdd();

let teacher={
    fname:"ajay",
    lname:"devgn",
    fullName(){
        const nestedArrow=()=>{
        console.log(this); //teacher object
        console.log(this.fname+" "+this.lname);
        }
        nestedArrow();
    },
    institute:{
        name:"IACSD",
        getIst(){
            const nestedArrow=()=>{
            console.log(this); //institute object
            console.log(this.name);
            }
            nestedArrow();
        }
    }
}
teacher.fullName();
teacher.institute.getIst();

let user={
    name:"vaishnav",
    age:23,
    getDetails(){
        const nestedArrow=()=>{
            console.log(this);
            console.log(this.name+" "+this.age);
        }
        nestedArrow();
    }
}
user.getDetails();


class user1{
    constructor(name){
        console.log(this);
        this.name=name;
    }
    getDetails(){
        console.log(this);
        console.log(this.name);
    }
}
const User1=new user1("vaishnav");
User1.getDetails();
