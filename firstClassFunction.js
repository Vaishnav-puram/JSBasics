function square(a){
    return a*a;
}

function displaySquare(fn){
    console.log("Square is : "+fn(5));
}

displaySquare(square);