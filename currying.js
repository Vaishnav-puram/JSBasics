function add(a,b){
    console.log(a+b);
}
add(10,20);

function add1(a){
    function inner(b){
        console.log(a+b);
    }
    return inner;
}
add1(10)(20);

// function one(a){
//     return function two(b){
//         return function three(c){
//             console.log(a+b+c);
//         }
//     }
// }
// one(10)(20)(30);

function one(a){
    return function two(b){
        if(b){
            return one(a+b);
        }
        return a;
    }
}
console.log(one(10)(20)(30)(40)(50)(60)(70)());  

function sum(a){
    return function(b,c){
        return a+b+c;
    }
}
var res=sum(10);
console.log(res(20,30));
console.log(sum(10)(20,30));