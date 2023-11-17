function sel(){
    var op=document.getElementById("op").selectedIndex;
    var index=document.getElementById("op").options[op].value;
    if(index=="factorial"){
        document.getElementById("B").style.display="none";
    }else{
        document.getElementById("B").style.display="table-cell";
        document.getElementById("B").style.verticalAlign="inherit";
    }
}
function calc(){
    var op=document.getElementById("op").selectedIndex;
    var index=document.getElementById("op").options[op].value;
    var a=+document.getElementById("a").value;
    var b=+document.getElementById("b").value;
    console.log(a+"--------");
    console.log(b+"----------");
    var res;
    switch(index){
        case "addition":
            res=a+b;
            break;
        case "subtraction":
            res=a-b;
            break;
        case "multiplication":
            res=a*b;
            break;
        case "division":
            res=a/b;
            break;
        case "factorial":
            document.getElementById("B").style.display="none";
            var fact=1;
            for(var i=1;i<=a;i++){
                fact=fact*i;
            }
            res=fact;
            break;
        default:
            res="Invalid option"
    }
    console.log(res);
    document.getElementById("res").value=res;
}
