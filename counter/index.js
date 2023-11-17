// function incCounter(){
//     let count=0;
//     this.increament=function(){
//         count++;
//         document.getElementById("data").innerHTML=count;
//     }
//     this.decreament=function(){
//         count--;
//         document.getElementById("data").innerHTML=count;
//     }
//     this.reset=function(){
//         count=0;
//         document.getElementById("data").innerHTML=count;
//     }
// }
// var obj=new incCounter();
document.getElementById("data").innerHTML=localStorage.count;
function incCounter(){
    this.increament=function(){
        if(localStorage.count!==undefined){
            var newCount=parseInt(localStorage.getItem("count"))+1;
           
            localStorage.setItem("count",newCount);
        }else{
            localStorage.setItem("count",1);
        }
        document.getElementById("data").innerHTML=localStorage.count;
    }
    this.decreament=function(){
        if(localStorage.count!==undefined&&localStorage.getItem("count")>=1){
            var newCount=parseInt(localStorage.getItem("count"))-1;
            localStorage.setItem("count",newCount);
        }else{
            localStorage.setItem("count",0);
        }
        document.getElementById("data").innerHTML=localStorage.count;
    }
    this.reset=function(){
        localStorage.setItem("count",0);
        document.getElementById("data").innerHTML=localStorage.count;
    }
}
var obj=new incCounter();