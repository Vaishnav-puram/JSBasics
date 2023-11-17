let val;
(
    function(){
        val="vaishnav";
    }
)();
console.log(val);

(
    function square(a){
        console.log(a*a);
    }
)(5);

(
    function(x){
        return (
            function(y){
                console.log(x);
            }
        )(2);
    }
)(1);