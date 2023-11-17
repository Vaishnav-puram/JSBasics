// // let user={
// //     fname:"vaishnav",
// //     getDetails(){
// //         const fname="puram";
// //         console.log(this.fname);
// //     }
// // }
// // user.getDetails();

// function makeUser(){
//     return{
//         name:"vaishnav",
//         ref:this
//     }
// }
// let user1=makeUser();
// console.log(user1.name) //vaishnav
// console.log(user1.ref); //window object
// console.log(user1.ref.name); //undefined

// function makeUser1(){
//     return{
//         name:"vaishnav",
//         ref(){
//             return this;
//         }
//     }
// }
// let user2=makeUser1();
// console.log(user2.name) //vaishnav
// console.log(user2.ref().name); 

// const user={
//     fname:"vaishnav puram",
//     logMessage(){
//         console.log(this.fname);
//     }
// }
// // setTimeout(user.logMessage(),1000);
// setTimeout(function(){
//     user.logMessage();
// },2000);

// const user = {
//     fname: "vaishnav",
//     greet() {
//         return `Hello ${this.fname}!`;
//     },
//     // farewell:()=>{
//     //     return `Bye ${this.name}`;
//     // }
//     farewell: {
//         fname: "vaishnav",
//         getFarewell() {
//             const nestedFun = () => {
//                 return `Bye ${this.fname}`;
//             }
//             nestedFun();
//         }
//     }
// }
// console.log(user.greet());
// console.log(user.farewell.getFarewell());

let calculator={
    read(){
        this.a=+prompt("Enter a :",0);
        this.b=+prompt("Enter b :",0);
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());