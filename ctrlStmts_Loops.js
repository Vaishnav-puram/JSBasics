let a=20;
if(a<20){
    console.log("lesser");
}else if(a>20){
    console.log("greater");
}else{
    console.log("equal");
}

let day;
switch(new Date().getDay()){
    case 0:
        day="sunday";
        break;
    case 1:
        day="monday";
        break;
    case 2:
        day="tuesday";
        break;
    case 3:
        day="wednesday";
        break;
    case 4:
        day="thursday";
        break;
    case 5:
        day="friday";
    case 6:
        day="saturday";
        break;
}
console.log(day);

let x=5;
while(x>=0){
    console.log(x);
    x--;
}

let y=5
do{
    console.log(y);
    y--;
}while(y>=0);

for(let i=0;i<=5;i++){
    console.log(i);
}

let cars=["BMW","BENZ","AUDI"];
let i,text;
for(i=0,text="";i<cars.length;i++){
    text+=cars[i]+" ";
}
console.log(text);

let text1="";
for(obj in cars){
    if(obj){
    text1+=cars[obj]+" ";
    }
}
console.log(text1);

let text2="";
for(obj of cars){
    text2+=obj+" ";
}
console.log(text2);

let lang="vaishnav";
let text3="";
for(obj of lang){
    text3+=obj+" ";
}
console.log(text3);