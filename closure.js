// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// x()();


function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}
x()();

function z() {
    var b = 100;
    function x() {
        var a = 10;
        function y() {
            console.log(a, b);
        }
        a = 100;
        return y;
    }
    return x;
}
z()()();

// function v(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Hello vaishnav"); //this will print and wont wait for the timeout to complete
// }
// v();

// function v(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*3000);
//     }
//     console.log("Hello vaishnav"); //this will print and wont wait for the timeout to complete
// }
// v();

// function v() {
//     for (var i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000);
//         }
//         close(i);
//     }
//     console.log("Hello vaishnav"); //this will print and wont wait for the timeout to complete
// }
//v();

function outer(str){
    function inner(){
        console.log(str,a);
    }
    let a=100;
    return inner;
}
let a=10;
outer("Hello vaishnav")();


// function add() {
//     let counter = 0;
//     counter += 1;
//     console.log(counter);
//   }
// add();
// add();
// add();

// function add() {
//     let counter = 0;
//    function inner(){
//     counter += 1;
//     console.log(counter);
//    }
//    return inner;
//   }
// var inc=add();
// inc();
// inc();
// inc();
// var inc2=add();
// inc2();
// inc2();
// inc2();

function incCounter(){
    let counter=0;
    // this.increament=()=>{
    //     counter+=1;
    //     console.log(counter);
    // }
    this.increament=function(){
        counter+=1;
        console.log(counter);
    }
    this.decreament=()=>{
        counter-=1;
        console.log(counter);
    }
}
var obj1=new incCounter();
obj1.increament();
obj1.increament();
obj1.increament();
obj1.increament();
obj1.increament();
obj1.decreament();
obj1.decreament();
obj1.decreament();
obj1.decreament();
